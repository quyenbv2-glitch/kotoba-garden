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

// Firebase configuration - thay thế bằng config của bạn
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
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

export { app, auth, db, storage, functions };