import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, limit } from "../lib/firebase";
import { db, isFirebaseConfigured } from "../lib/firebase";

interface LeaderboardEntry {
  uid: string;
  displayName: string;
  totalXp: number;
  streakCount: number;
  wordsLearned: number;
  avatar?: string;
}

interface LeaderboardProps {
  currentUid?: string;
}

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { uid: "u1", displayName: "Yuki Sato", totalXp: 5420, streakCount: 42, wordsLearned: 320 },
  { uid: "u2", displayName: "Hana Tanaka", totalXp: 4890, streakCount: 28, wordsLearned: 285 },
  { uid: "u3", displayName: "Minh Nguyễn", totalXp: 4350, streakCount: 35, wordsLearned: 240 },
  { uid: "u4", displayName: "Linh Trần", totalXp: 3920, streakCount: 21, wordsLearned: 198 },
  { uid: "u5", displayName: "Ken Yamada", totalXp: 3580, streakCount: 18, wordsLearned: 175 },
  { uid: "u6", displayName: "Akira Mori", totalXp: 3140, streakCount: 14, wordsLearned: 152 },
  { uid: "u7", displayName: "Sakura Ito", totalXp: 2890, streakCount: 11, wordsLearned: 138 },
  { uid: "u8", displayName: "Riku Kobayashi", totalXp: 2450, streakCount: 9, wordsLearned: 121 },
  { uid: "u9", displayName: "Yui Watanabe", totalXp: 1980, streakCount: 7, wordsLearned: 98 },
  { uid: "u10", displayName: "Haruki Shimizu", totalXp: 1620, streakCount: 5, wordsLearned: 82 },
];

export function Leaderboard({ currentUid }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [scope, setScope] = useState<"global" | "weekly">("global");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        if (!isFirebaseConfigured() || !db) {
          if (!cancelled) setEntries(MOCK_LEADERBOARD);
          return;
        }
        // Thử tải từ Firestore; nếu không có dữ liệu thì dùng mock
        const q = query(
          collection(db, "userProfiles"),
          orderBy("totalXp", "desc"),
          limit(50)
        );
        const snap = await getDocs(q);
        if (!cancelled) {
          if (!snap.empty) {
            const data = snap.docs.map((d) => ({
              uid: d.id,
              ...(d.data() as Omit<LeaderboardEntry, "uid">),
            }));
            setEntries(data);
          } else {
            setEntries(MOCK_LEADERBOARD);
          }
        }
      } catch (err) {
        console.warn("Leaderboard fallback to mock:", err);
        if (!cancelled) setEntries(MOCK_LEADERBOARD);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [scope]);

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { emoji: "🥇", color: "from-yellow-100 to-yellow-200 border-yellow-300" };
    if (rank === 2) return { emoji: "🥈", color: "from-gray-100 to-gray-200 border-gray-300" };
    if (rank === 3) return { emoji: "🥉", color: "from-orange-100 to-orange-200 border-orange-300" };
    return { emoji: `#${rank}`, color: "from-white to-gray-50 border-gray-200" };
  };

  const currentUserEntry = entries.find((e) => e.uid === currentUid);
  const currentUserRank = currentUserEntry ? entries.indexOf(currentUserEntry) + 1 : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">🏆 Bảng xếp hạng</h2>
        <p className="text-sm text-gray-500">Cạnh tranh với cộng đồng người học KotobaGarden</p>
      </div>

      {/* Scope tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setScope("global")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            scope === "global"
              ? "bg-emerald-500 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
          }`}
        >
          🌏 Toàn cầu
        </button>
        <button
          onClick={() => setScope("weekly")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            scope === "weekly"
              ? "bg-emerald-500 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
          }`}
        >
          📅 Tuần này
        </button>
      </div>

      {/* Current user pinned card */}
      {currentUserEntry && currentUserRank && (
        <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-emerald-700 w-12 text-center">
              #{currentUserRank}
            </div>
            <div className="flex-1">
              <div className="font-bold text-emerald-900">
                {currentUserEntry.displayName} (Bạn)
              </div>
              <div className="text-sm text-emerald-700 flex items-center gap-3 mt-1">
                <span>💎 {currentUserEntry.totalXp} XP</span>
                <span>🔥 {currentUserEntry.streakCount} ngày</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard list */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-2">⏳</div>
          <p>Đang tải bảng xếp hạng...</p>
        </div>
      ) : (
        <div className="space-y-2">
          {entries.map((entry, idx) => {
            const rank = idx + 1;
            const badge = getRankBadge(rank);
            const isMe = entry.uid === currentUid;
            return (
              <div
                key={entry.uid}
                className={`flex items-center gap-4 p-3 rounded-xl border bg-gradient-to-r ${
                  badge.color
                } ${isMe ? "ring-2 ring-emerald-400" : ""}`}
              >
                <div className="w-12 text-center text-xl font-bold">{badge.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 truncate">
                    {entry.displayName}
                    {isMe && <span className="ml-2 text-xs text-emerald-600">(Bạn)</span>}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-3 mt-0.5">
                    <span>📚 {entry.wordsLearned} từ</span>
                    <span>🔥 {entry.streakCount} ngày</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-emerald-700">
                    {entry.totalXp.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">XP</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
