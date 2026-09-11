/**
 * Firebase Authentication Service cho KotobaGarden
 * Quản lý đăng nhập, đăng xuất, và trạng thái người dùng
 */

import { UserProfile } from "../types/kotoba";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  auth,
  db,
  isFirebaseConfigured,
} from "../lib/firebase";
import type { User } from "firebase/auth";

/**
 * Khởi tạo Google Auth provider
 */
const googleProvider = new GoogleAuthProvider();

/**
 * Kiểm tra xem Firebase đã được cấu hình chưa
 */
const ensureFirebaseConfigured = (): void => {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase chưa được cấu hình. Vui lòng tạo file .env với các biến VITE_FIREBASE_* từ Firebase Console."
    );
  }
};

/**
 * Đăng ký người dùng mới với email/password
 */
export const registerWithEmail = async (
  email: string,
  password: string,
  displayName: string
): Promise<{ uid: string; displayName: string }> => {
  ensureFirebaseConfigured();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
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

    await setDoc(doc(db!, "users", user.uid), userProfile);

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    const code = error?.code || "";
    const message = error?.message || "Đăng ký thất bại";

    if (code === "auth/invalid-api-key" || code === "auth/network-request-failed") {
      throw new Error(
        "Lỗi cấu hình Firebase: API key không hợp lệ hoặc không thể kết nối mạng. " +
        "Vui lòng kiểm tra biến VITE_FIREBASE_API_KEY trong file .env và đảm bảo kết nối Internet."
      );
    }
    if (code === "auth/email-already-in-use") {
      throw new Error("Email đã được sử dụng. Vui lòng dùng email khác hoặc đăng nhập.");
    }
    if (code === "auth/weak-password") {
      throw new Error("Mật khẩu quá yếu. Vui lòng đặt mật khẩu mạnh hơn.");
    }
    if (code === "auth/operation-not-allowed") {
      throw new Error("Đăng ký tài khoản qua email/password chưa được bật trong Firebase Console.");
    }

    throw new Error(message || "Đăng ký thất bại");
  }
};

/**
 * Đăng nhập với email/password
 */
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<{ uid: string; displayName: string }> => {
  ensureFirebaseConfigured();
  try {
    const userCredential = await signInWithEmailAndPassword(auth!, email, password);
    const { user } = userCredential;

    // Cập nhật last active date
    await updateUserLastActive(user.uid);

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    const code = error?.code || "";
    const message = error?.message || "Đăng nhập thất bại";

    // Map Firebase Auth error codes to friendly messages
    if (code === "auth/invalid-api-key" || code === "auth/network-request-failed") {
      throw new Error(
        "Lỗi cấu hình Firebase: API key không hợp lệ hoặc không thể kết nối mạng. " +
        "Vui lòng kiểm tra biến VITE_FIREBASE_API_KEY trong file .env và đảm bảo kết nối Internet."
      );
    }
    if (code === "auth/user-not-found" || code === "auth/wrong-password") {
      throw new Error("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.");
    }
    if (code === "auth/too-many-requests") {
      throw new Error("Quá nhiều lần đăng nhập. Vui lòng thử lại sau vài phút.");
    }
    if (code === "auth/invalid-email") {
      throw new Error("Định dạng email không hợp lệ.");
    }
    if (code === "auth/user-disabled") {
      throw new Error("Tài khoản đã bị vô hiệu hóa.");
    }

    throw new Error(message || "Đăng nhập thất bại");
  }
};

/**
 * Đăng nhập với Google
 */
export const loginWithGoogle = async (): Promise<{ uid: string; displayName: string }> => {
  ensureFirebaseConfigured();
  try {
    const result = await signInWithPopup(auth!, googleProvider);
    const { user } = result;

    // Kiểm tra xem user đã tồn tại trong Firestore chưa
    const userDoc = await getDoc(doc(db!, "users", user.uid));
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

      await setDoc(doc(db!, "users", user.uid), userProfile);
    } else {
      // Cập nhật last active date
      await updateUserLastActive(user.uid);
    }

    return { uid: user.uid, displayName: user.displayName || "" };
  } catch (error: any) {
    const code = error?.code || "";
    const message = error?.message || "Đăng nhập Google thất bại";

    if (code === "auth/invalid-api-key" || code === "auth/network-request-failed") {
      throw new Error(
        "Lỗi cấu hình Firebase: API key không hợp lệ hoặc không thể kết nối mạng. " +
        "Vui lòng kiểm tra biến VITE_FIREBASE_API_KEY trong file .env và đảm bảo kết nối Internet."
      );
    }
    if (code === "auth/popup-closed-by-user") {
      throw new Error("Đăng nhập Google bị hủy. Vui lòng thử lại.");
    }
    if (code === "auth/popup-blocked") {
      throw new Error("Popup bị chặn. Vui lòng cho phép popup trong trình duyệt để đăng nhập Google.");
    }

    throw new Error(message || "Đăng nhập Google thất bại");
  }
};

/**
 * Đăng xuất
 */
export const logout = async (): Promise<void> => {
  ensureFirebaseConfigured();
  try {
    await firebaseSignOut(auth!);
  } catch (error: any) {
    throw new Error(error.message || "Đăng xuất thất bại");
  }
};

/**
 * Lắng nghe trạng thái auth
 */
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  if (!isFirebaseConfigured() || !auth) {
    // Trả về một unsubscribe function noop
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};

/**
 * Cập nhật last active date của người dùng
 */
export const updateUserLastActive = async (uid: string): Promise<void> => {
  if (!isFirebaseConfigured() || !db) return;
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
  if (!isFirebaseConfigured() || !db) return;
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
  if (!isFirebaseConfigured() || !db) return;
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
  if (!isFirebaseConfigured() || !db) return null;
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
  if (!isFirebaseConfigured() || !db) return;
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, updates);
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};