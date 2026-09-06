export type PlantStageId = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface PlantStageInfo {
  id: PlantStageId;
  label: string;
  emoji: string;
  description: string;
  minRepetitions: number;
  color: string;
  bgLight: string;
}

export const PLANT_STAGES: Record<PlantStageId, PlantStageInfo> = {
  0: {
    id: 0,
    label: "Hạt giống",
    emoji: "🌱",
    description: "Mới bắt đầu gieo trồng (Chưa qua chu kỳ SRS nào)",
    minRepetitions: 0,
    color: "#10B981",
    bgLight: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  1: {
    id: 1,
    label: "Nảy mầm cấp 1",
    emoji: "🌱",
    description: "Mầm non nhú lên khỏi mặt đất (Đã ôn đúng 1 lần)",
    minRepetitions: 1,
    color: "#22C55E",
    bgLight: "bg-green-50 text-green-800 border-green-200",
  },
  2: {
    id: 2,
    label: "Nảy mầm cấp 2",
    emoji: "🌿",
    description: "Hai lá mầm bung nở (Đã ôn đúng 2 lần)",
    minRepetitions: 2,
    color: "#16A34A",
    bgLight: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  3: {
    id: 3,
    label: "Cây con vươn cành",
    emoji: "🌿",
    description: "Rễ bám chắc, thân cứng cáp (Thuộc ngắn hạn)",
    minRepetitions: 3,
    color: "#15803D",
    bgLight: "bg-teal-50 text-teal-800 border-teal-200",
  },
  4: {
    id: 4,
    label: "Cây phát triển",
    emoji: "🪴",
    description: "Cành lá sum suê (Khoảng cách ôn tăng lên nhiều ngày)",
    minRepetitions: 4,
    color: "#0F766E",
    bgLight: "bg-teal-50 text-teal-800 border-teal-200",
  },
  5: {
    id: 5,
    label: "Cây trưởng thành",
    emoji: "🌳",
    description: "Vững chãi, nhớ rất chắc chắn trong trí nhớ trung hạn",
    minRepetitions: 5,
    color: "#047857",
    bgLight: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  6: {
    id: 6,
    label: "Đơm hoa kết trái",
    emoji: "🌸",
    description: "Ghi nhớ vĩnh viễn (Bộ nhớ dài hạn - Mastered)",
    minRepetitions: 6,
    color: "#D946EF",
    bgLight: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200",
  },
};

export const WITHERED_STAGE = {
  id: -1,
  label: "Cây héo mòn",
  emoji: "🍂",
  description: "Bỏ lỡ ôn tập quá hạn hoặc trả lời sai, cần tưới nước cấp tốc!",
  color: "#D97706",
  bgLight: "bg-amber-50 text-amber-900 border-amber-300",
};

export interface Word {
  id: string;
  courseId: string;
  kanji: string;
  kana: string;
  romaji: string;
  hanViet: string;
  meaning: string;
  textMnemonic?: string; // Memrise-style Text Mnemonic (No image/audio)
  lessonGroup?: string;
  exampleSentence?: {
    jp: string;
    reading: string;
    vi: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Hiragana" | "Katakana" | "N5" | "N4" | "N3" | "N2" | "N1" | "Custom";
  creatorId: string;
  creatorName: string;
  isCustom: boolean;
  isPublic: boolean;
  wordCount: number;
  createdAt: string;
  tags: string[];
}

export interface UserWordProgress {
  wordId: string;
  courseId: string;
  plantStage: PlantStageId;
  isWithered: boolean; // True if due date missed by > 48h or wrong answer
  easeFactor: number; // SuperMemo EF: default 2.5 (min 1.3)
  intervalDays: number; // Current interval in days
  repetitions: number; // Consecutive successful reviews
  lastReviewed: string | null; // ISO Date string
  nextReview: string; // ISO Date string
  lapseCount: number; // Times user failed this word
  isDifficult: boolean; // Marked as difficult word
  xpEarned: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  streakCount: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalXp: number;
  level: number;
  role: "user" | "admin";
  createdCoursesCount: number;
}

export interface LeaderboardEntry {
  uid: string;
  displayName: string;
  totalXp: number;
  streakCount: number;
  wordsMastered: number;
  rank: number;
  avatarText: string;
}

export type ReviewMode = "planting" | "quiz" | "typing" | "speed" | "watering";

export interface SRSReviewResult {
  wordId: string;
  quality: 0 | 1 | 2 | 3 | 4 | 5; // 0-2 = Fail, 3 = Pass hard, 4 = Pass good, 5 = Pass easy
  userAnswer?: string;
  timeSpentMs?: number;
}
