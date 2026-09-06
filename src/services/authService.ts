/**
 * Firebase Authentication Service cho KotobaGarden
 * Quản lý đăng nhập, đăng xuất, và trạng thái người dùng
 */

import { UserProfile } from "../types/kotoba";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { app } from "../lib/firebase";

/**
 * Khởi tạo Firebase services
 */
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Đăng ký người dùng mới với email/password
 */
export const registerWithEmail = async (
  email: string,
  password: string,
  displayName: string
): Promise<{ uid: string; displayName: string }> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Cập nhật displayName
    await updateProfile(user, { displayName });

    // Tạo profile trong Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email || "",
      displayName: displayName,
      streakCount: 0,
      lastActiveDate: new Date().toISOString().split("T")[0],
      totalXp: 0,
      level: 1,
      role: "user",
      createdCoursesCount: 0,
    };

    await setDoc(doc(db, "users", user.uid), userProfile);

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    throw new Error(error.message || "Đăng ký thất bại");
  }
};

/**
 * Đăng nhập với email/password
 */
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<{ uid: string; displayName: string }> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Cập nhật last active date
    await updateUserLastActive(user.uid);

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    throw new Error(error.message || "Đăng nhập thất bại");
  }
};

/**
 * Đăng nhập với Google
 */
export const loginWithGoogle = async (): Promise<{ uid: string; displayName: string }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { user } = result;

    // Kiểm tra xem user đã tồn tại trong Firestore chưa
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // Tạo profile mới nếu chưa tồn tại
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        streakCount: 0,
        lastActiveDate: new Date().toISOString().split("T")[0],
        totalXp: 0,
        level: 1,
        role: "user",
        createdCoursesCount: 0,
      };

      await setDoc(doc(db, "users", user.uid), userProfile);
    } else {
      // Cập nhật last active date
      await updateUserLastActive(user.uid);
    }

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    throw new Error(error.message || "Đăng nhập Google thất bại");
  }
};

/**
 * Đăng xuất
 */
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message || "Đăng xuất thất bại");
  }
};

/**
 * Lắng nghe trạng thái auth
 */
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Cập nhật last active date của người dùng
 */
export const updateUserLastActive = async (uid: string): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      lastActiveDate: new Date().toISOString().split("T")[0],
    });
  } catch (error) {
    console.error("Error updating last active date:", error);
  }
};

/**
 * Cập nhật streak count
 */
export const updateStreakCount = async (uid: string, streakCount: number): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { streakCount });
  } catch (error) {
    console.error("Error updating streak count:", error);
  }
};

/**
 * Cập nhật total XP
 */
export const updateTotalXp = async (uid: string, totalXp: number): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { totalXp });
  } catch (error) {
    console.error("Error updating total XP:", error);
  }
};

/**
 * Lấy profile người dùng
 */
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error("Error getting user profile:", error);
    return null;
  }
};

/**
 * Cập nhật profile người dùng
 */
export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, updates);
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};