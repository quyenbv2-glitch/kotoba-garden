/**
 * Firebase Configuration cho KotobaGarden
 * Sử dụng Firebase v9+ (Modular SDK)
 */

// Firebase imports
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getFunctions, Functions } from "firebase/functions";

// Firebase configuration - sử dụng biến môi trường nếu hợp lệ,
// nếu không thì dùng cấu hình đã cung cấp để ứng dụng hoạt động được
const getValidApiKey = (): string => {
  const envKey = import.meta.env.VITE_FIREBASE_API_KEY;
  if (envKey && envKey.startsWith("AIza") && envKey.length >= 30) {
    return envKey;
  }
  return "AIzaSyAjMzkYhh32TS2DpJ_f5K9RO-U683euxD4";
};

const firebaseConfig = {
  apiKey: getValidApiKey(),
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "web-tu-moi.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "web-tu-moi",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "web-tu-moi.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "980739079340",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:980739079340:web:493e3c5a601b26ff597309",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-T8KWZDQ6N2",
};

// Kiểm tra xem Firebase đã được cấu hình đầy đủ chưa
export const isFirebaseConfigured = (): boolean => {
  // Firebase Web API keys thường bắt đầu bằng "AIza" và có độ dài khoảng 39 ký tự
  const apiKeyValid =
    !!firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.apiKey.startsWith("AIza") &&
    firebaseConfig.apiKey.length >= 30;

  return (
    apiKeyValid &&
    !!firebaseConfig.projectId &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
    !!firebaseConfig.authDomain &&
    !!firebaseConfig.appId
  );
};

// Chỉ khởi tạo Firebase khi có config hợp lệ
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;
let functions: Functions | null = null;

if (isFirebaseConfigured()) {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  functions = getFunctions(app);
}

// Re-export auth functions
export {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  type User,
} from "firebase/auth";

// Re-export firestore functions
export {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  writeBatch,
  deleteDoc,
  onSnapshot,
  Timestamp,
  limit,
  type DocumentReference,
  type DocumentData,
} from "firebase/firestore";

/**
 * Lấy trạng thái cấu hình Firebase hiện tại
 * Trả về cấu hình cấu hình đầy đủ và danh sách các biến thiếu
 */
export const getFirebaseConfigStatus = (): {
  configured: boolean;
  missing: string[];
  apiKeyValid: boolean;
} => {
  const apiKeyValid =
    !!firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.apiKey.startsWith("AIza") &&
    firebaseConfig.apiKey.length >= 30;

  const missing: string[] = [];

  if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY") {
    missing.push("VITE_FIREBASE_API_KEY");
  }
  if (!firebaseConfig.projectId || firebaseConfig.projectId === "YOUR_PROJECT_ID") {
    missing.push("VITE_FIREBASE_PROJECT_ID");
  }
  if (!firebaseConfig.authDomain) {
    missing.push("VITE_FIREBASE_AUTH_DOMAIN");
  }
  if (!firebaseConfig.appId) {
    missing.push("VITE_FIREBASE_APP_ID");
  }

  return {
    configured: isFirebaseConfigured() && apiKeyValid,
    missing,
    apiKeyValid,
  };
};

export { app, auth, db, storage, functions };