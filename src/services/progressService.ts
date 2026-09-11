/**
 * Firebase Progress Service cho KotobaGarden
 * Quản lý tiến trình học tập, đồng bộ với Firestore, và hỗ trợ offline-first
 */

import { UserWordProgress, Word, Course, SRSResult } from "../types/kotoba";
import { db, isFirebaseConfigured } from "../lib/firebase";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  onSnapshot,
  Timestamp,
} from "../lib/firebase";
import { computeSRSReview, isDueForReview } from "../utils/srsCalculator";

/** Helper: throw error nếu Firebase chưa được cấu hình */
const ensureFirebaseConfigured = (): void => {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase chưa được cấu hình. Vui lòng thêm các biến VITE_FIREBASE_* từ Firebase Console vào file .env."
    );
  }
};

/**
 * Chuyển đổi giá trị ngày tháng từ Firestore (có thể là Timestamp, ISO string, hoặc Date)
 * về dạng ISO string để dùng trong toàn bộ app.
 */
const toIsoString = (value: unknown): string | null => {
  if (!value) return null;
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  if (typeof value === "number") return new Date(value).toISOString();
  return null;
};

/**
 * Lấy tất cả tiến trình của người dùng
 */
export const getUserProgress = async (uid: string): Promise<UserWordProgress[]> => {
  ensureFirebaseConfigured();
  try {
    const progressRef = collection(db, "users", uid, "progress");
    const querySnapshot = await getDocs(progressRef);
    return querySnapshot.docs.map((d) => {
      const data = d.data();
      return {
        ...data,
        lastReviewed: toIsoString(data.lastReviewed),
        nextReview: toIsoString(data.nextReview) ?? new Date().toISOString(),
      } as UserWordProgress;
    });
  } catch (error) {
    console.error("Error getting user progress:", error);
    throw error;
  }
};

/**
 * Lấy tiến trình của một từ cụ thể
 */
export const getWordProgress = async (
  uid: string,
  wordId: string
): Promise<UserWordProgress | null> => {
  ensureFirebaseConfigured();
  try {
    const progressRef = doc(db, "users", uid, "progress", wordId);
    const progressDoc = await getDoc(progressRef);
    if (progressDoc.exists()) {
      const data = progressDoc.data();
      return {
        ...data,
        lastReviewed: toIsoString(data.lastReviewed),
        nextReview: toIsoString(data.nextReview) ?? new Date().toISOString(),
      } as UserWordProgress;
    }
    return null;
  } catch (error) {
    console.error("Error getting word progress:", error);
    throw error;
  }
};

/**
 * Cập nhật tiến trình học tập sau khi hoàn thành bài luyện tập
 */
export const updateWordProgress = async (
  uid: string,
  wordId: string,
  courseId: string,
  reviewResult: { quality: 0 | 1 | 2 | 3 | 4 | 5; timeSpentMs?: number },
  currentProgress?: UserWordProgress
): Promise<SRSResult> => {
  ensureFirebaseConfigured();
  try {
    const progressRef = doc(db, "users", uid, "progress", wordId);
    let existingProgress = currentProgress;

    if (!existingProgress) {
      const progressDoc = await getDoc(progressRef);
      if (progressDoc.exists()) {
        const rawData = progressDoc.data();
        existingProgress = {
          ...rawData,
          lastReviewed: toIsoString(rawData.lastReviewed),
          nextReview: toIsoString(rawData.nextReview) ?? new Date().toISOString(),
        } as UserWordProgress;
      }
    }

    // Tính toán SRS mới
    const srsResult = computeSRSReview(reviewResult.quality, existingProgress || {
      wordId,
      courseId,
      plantStage: 0,
      isWithered: false,
      easeFactor: 2.5,
      intervalDays: 0,
      repetitions: 0,
      lastReviewed: null,
      nextReview: new Date().toISOString(),
      lapseCount: 0,
      isDifficult: false,
      xpEarned: 0,
    });

    // Tạo dữ liệu tiến trình mới
    const newProgress: UserWordProgress = {
      wordId,
      courseId,
      plantStage: srsResult.plantStage,
      isWithered: srsResult.isWithered,
      easeFactor: srsResult.easeFactor,
      intervalDays: srsResult.intervalDays,
      repetitions: srsResult.repetitions,
      lastReviewed: new Date().toISOString(),
      nextReview: srsResult.nextReview,
      lapseCount: existingProgress?.lapseCount || 0,
      isDifficult: existingProgress?.isDifficult || false,
      xpEarned: existingProgress?.xpEarned || 0,
    };

    // Cập nhật tiến trình
    await setDoc(progressRef, newProgress);

    // Cập nhật streak count của người dùng
    await updateUserStreak(uid);

    return srsResult;
  } catch (error) {
    console.error("Error updating word progress:", error);
    throw error;
  }
};

/**
 * Lấy danh sách từ cần ôn tập hôm nay
 */
export const getTodayReviewWords = async (uid: string): Promise<UserWordProgress[]> => {
  try {
    const userProgress = await getUserProgress(uid);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return userProgress.filter((progress) => {
      const nextReviewDate = new Date(progress.nextReview);
      return nextReviewDate <= today && !progress.isWithered;
    });
  } catch (error) {
    console.error("Error getting today review words:", error);
    throw error;
  }
};

/**
 * Lấy danh sách từ khó (tỉ lệ sai cao)
 */
export const getDifficultWords = async (uid: string): Promise<UserWordProgress[]> => {
  try {
    const userProgress = await getUserProgress(uid);
    return userProgress.filter((progress) => progress.isDifficult);
  } catch (error) {
    console.error("Error getting difficult words:", error);
    throw error;
  }
};

/**
 * Đánh dấu từ vựng là khó
 */
export const markWordAsDifficult = async (
  uid: string,
  wordId: string,
  isDifficult: boolean
): Promise<void> => {
  ensureFirebaseConfigured();
  try {
    const progressRef = doc(db, "users", uid, "progress", wordId);
    await updateDoc(progressRef, { isDifficult });
  } catch (error) {
    console.error("Error marking word as difficult:", error);
    throw error;
  }
};

/**
 * Xóa tiến trình của một từ (khi xóa course)
 */
export const deleteWordProgress = async (uid: string, wordId: string): Promise<void> => {
  ensureFirebaseConfigured();
  try {
    const progressRef = doc(db, "users", uid, "progress", wordId);
    await deleteDoc(progressRef);
  } catch (error) {
    console.error("Error deleting word progress:", error);
    throw error;
  }
};

/**
 * Cập nhật streak count của người dùng
 */
export const updateUserStreak = async (uid: string): Promise<void> => {
  ensureFirebaseConfigured();
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const today = new Date().toISOString().split("T")[0];
      const lastActiveDate = userData.lastActiveDate;

      if (lastActiveDate === today) {
        // Đã học hôm nay, giữ nguyên streak
        return;
      } else if (lastActiveDate) {
        const lastDate = new Date(lastActiveDate);
        const diffDays = Math.floor((new Date(today).getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Học liên tục
          await updateDoc(userRef, { streakCount: (userData.streakCount || 0) + 1 });
        } else {
          // Bị gián đoạn
          await updateDoc(userRef, { streakCount: 1 });
        }
      } else {
        // Lần học đầu tiên
        await updateDoc(userRef, { streakCount: 1 });
      }

      // Cập nhật last active date
      await updateDoc(userRef, { lastActiveDate: today });
    }
  } catch (error) {
    console.error("Error updating user streak:", error);
    throw error;
  }
};

/**
 * Lấy leaderboard (top người dùng theo XP)
 */
export const getLeaderboard = async (limit: number = 10): Promise<any[]> => {
  ensureFirebaseConfigured();
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users = querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    })) as any[];

    // Tính toán số từ đã học (mastered)
    const usersWithStats = await Promise.all(
      users.map(async (user) => {
        const progressRef = collection(db, "users", user.uid, "progress");
        const progressSnapshot = await getDocs(progressRef);
        const progress = progressSnapshot.docs.map((doc) => doc.data()) as UserWordProgress[];
        const wordsMastered = progress.filter((p) => p.plantStage === 6).length;

        return {
          ...user,
          wordsMastered,
        };
      })
    );

    // Sắp xếp theo XP và streak
    usersWithStats.sort((a, b) => {
      if (b.totalXp !== a.totalXp) return b.totalXp - a.totalXp;
      if (b.streakCount !== a.streakCount) return b.streakCount - a.streakCount;
      return b.wordsMastered - a.wordsMastered;
    });

    return usersWithStats.slice(0, limit).map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    throw error;
  }
};

/**
 * Lắng nghe thay đổi tiến trình theo thời gian thực
 */
export const subscribeToProgressChanges = (
  uid: string,
  callback: (progress: UserWordProgress[]) => void
) => {
  ensureFirebaseConfigured();
  const progressRef = collection(db, "users", uid, "progress");
  return onSnapshot(progressRef, (snapshot) => {
    const progress = snapshot.docs.map((d) => {
      const data = d.data();
      return {
        ...data,
        lastReviewed: toIsoString(data.lastReviewed),
        nextReview: toIsoString(data.nextReview) ?? new Date().toISOString(),
      } as UserWordProgress;
    });
    callback(progress);
  });
};