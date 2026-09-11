import { useState } from "react";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { auth, db, isFirebaseConfigured, firebaseSignOut } from "../lib/firebase";

export function FirebaseToolkit() {
  const [pingResult, setPingResult] = useState<string>("");
  const [isPinging, setIsPinging] = useState(false);

  const handlePingAuth = async () => {
    setIsPinging(true);
    setPingResult("");
    try {
      if (!isFirebaseConfigured() || !auth) {
        setPingResult("⚠️ Firebase chưa được cấu hình.");
        return;
      }
      const current = auth.currentUser;
      if (current) {
        setPingResult(`✅ Auth OK — uid: ${current.uid} • email: ${current.email ?? "(no email)"}`);
      } else {
        setPingResult("ℹ️ Chưa đăng nhập. Auth SDK đã sẵn sàng.");
      }
    } catch (err: any) {
      setPingResult(`❌ Auth lỗi: ${err?.message ?? String(err)}`);
    } finally {
      setIsPinging(false);
    }
  };

  const handlePingFirestore = async () => {
    setIsPinging(true);
    setPingResult("");
    try {
      if (!isFirebaseConfigured() || !db) {
        setPingResult("⚠️ Firebase chưa được cấu hình.");
        return;
      }
      // Thử truy cập settings của Firestore (không gọi network nếu offline)
      const appName = db.app.name;
      setPingResult(`✅ Firestore OK — app: ${appName}`);
    } catch (err: any) {
      setPingResult(`❌ Firestore lỗi: ${err?.message ?? String(err)}`);
    } finally {
      setIsPinging(false);
    }
  };

  const handleCopyUid = async () => {
    if (!isFirebaseConfigured() || !auth) {
      setPingResult("⚠️ Firebase chưa được cấu hình.");
      return;
    }
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    try {
      await navigator.clipboard.writeText(uid);
      setPingResult(`📋 Đã copy UID: ${uid}`);
    } catch {
      setPingResult(`UID: ${uid}`);
    }
  };

  const handleSignOut = async () => {
    if (!isFirebaseConfigured() || !auth) {
      setPingResult("⚠️ Firebase chưa được cấu hình.");
      return;
    }
    try {
      await firebaseSignOut(auth);
      setPingResult("👋 Đã đăng xuất");
    } catch (err: any) {
      setPingResult(`❌ Lỗi đăng xuất: ${err?.message ?? String(err)}`);
    }
  };

  const configured = isFirebaseConfigured();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">🛠️ Bộ công cụ KTS Hệ thống Firebase</h2>
        <p className="text-sm text-gray-500">Công cụ chẩn đoán & vận hành nhanh cho hệ thống Firebase</p>
      </div>

      {/* Config status */}
      <Alert className={configured ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}>
        <AlertDescription className="flex items-center gap-2">
          {configured ? (
            <>
              <span className="text-xl">✅</span>
              <span className="text-emerald-800">
                Firebase đã được cấu hình đầy đủ qua biến môi trường <code className="bg-emerald-100 px-1 rounded">VITE_FIREBASE_*</code>.
              </span>
            </>
          ) : (
            <>
              <span className="text-xl">⚠️</span>
              <span className="text-amber-800">
                Firebase <strong>chưa</strong> được cấu hình. Tạo file <code className="bg-amber-100 px-1 rounded">.env</code> với
                <code className="bg-amber-100 px-1 rounded mx-1">VITE_FIREBASE_API_KEY</code> và các biến liên quan.
              </span>
            </>
          )}
        </AlertDescription>
      </Alert>

      {/* Toolkit grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔐</span>
            <h3 className="font-bold text-gray-800">Auth SDK</h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">Kiểm tra kết nối và trạng thái phiên đăng nhập.</p>
          <Button onClick={handlePingAuth} disabled={isPinging} size="sm">
            Ping Auth
          </Button>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🗄️</span>
            <h3 className="font-bold text-gray-800">Firestore SDK</h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">Kiểm tra app instance và cấu hình database.</p>
          <Button onClick={handlePingFirestore} disabled={isPinging} size="sm" variant="outline">
            Ping Firestore
          </Button>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🆔</span>
            <h3 className="font-bold text-gray-800">Sao chép UID</h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">Copy UID hiện tại ra clipboard để tra cứu Firestore.</p>
          <Button onClick={handleCopyUid} size="sm" variant="outline" disabled={!auth?.currentUser}>
            Copy UID
          </Button>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🚪</span>
            <h3 className="font-bold text-gray-800">Đăng xuất nhanh</h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">Buộc đăng xuất phiên hiện tại (hữu ích khi debug).</p>
          <Button onClick={handleSignOut} size="sm" variant="destructive">
            Đăng xuất
          </Button>
        </div>
      </div>

      {/* Result panel */}
      {pingResult && (
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-sm whitespace-pre-wrap break-words">
          {pingResult}
        </div>
      )}

      {/* Env vars checklist */}
      <div className="p-5 rounded-xl bg-white border border-gray-200">
        <h3 className="font-bold text-gray-800 mb-3">📋 Checklist biến môi trường</h3>
        <ul className="text-sm space-y-1.5 text-gray-600">
          {[
            "VITE_FIREBASE_API_KEY",
            "VITE_FIREBASE_AUTH_DOMAIN",
            "VITE_FIREBASE_PROJECT_ID",
            "VITE_FIREBASE_STORAGE_BUCKET",
            "VITE_FIREBASE_MESSAGING_SENDER_ID",
            "VITE_FIREBASE_APP_ID",
          ].map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span className={configured ? "text-emerald-500" : "text-amber-500"}>
                {configured ? "✓" : "•"}
              </span>
              <code className="bg-gray-100 px-2 py-0.5 rounded">{key}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
