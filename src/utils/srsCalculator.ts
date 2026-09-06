/**
 * Thuật toán SRS SuperMemo SM-2 cho KotobaGarden
 * Tính toán chu kỳ ôn tập và cập nhật trạng thái hạt giống (Plant Stage)
 */

import { PlantStageId, PlantStageInfo, PLANT_STAGES, WITHERED_STAGE } from "../types/kotoba";

export interface SRSResult {
  nextReview: string; // ISO Date string
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  plantStage: PlantStageId;
  isWithered: boolean;
}

/**
 * Tính toán ngày ôn tập tiếp theo dựa trên SM-2
 * @param quality - Đánh giá chất lượng (0-5): 0-2 = Thất bại, 3 = Đạt khó, 4 = Đạt tốt, 5 = Đạt dễ
 * @param prevEaseFactor - Hệ số dễ trước đó (mặc định 2.5)
 * @param prevInterval -Khoảng cách trước đó (ngày)
 * @param prevRepetitions - Số lần ôn thành công liên tiếp trước đó
 */
export function calculateSRS(
  quality: 0 | 1 | 2 | 3 | 4 | 5,
  prevEaseFactor: number = 2.5,
  prevInterval: number = 0,
  prevRepetitions: number = 0
): { nextReview: string; intervalDays: number; easeFactor: number; repetitions: number } {
  let newEaseFactor = prevEaseFactor;
  let newInterval = 0;
  let newRepetitions = 0;

  if (quality >= 3) {
    // Thành công
    if (prevRepetitions === 0) {
      newInterval = 1;
    } else if (prevRepetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(prevInterval * prevEaseFactor);
    }
    newRepetitions = prevRepetitions + 1;
    newEaseFactor = prevEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  } else {
    // Thất bại
    newInterval = 1;
    newRepetitions = 0;
    newEaseFactor = prevEaseFactor - (0.8 - (quality * 0.1));
  }

  // Đảm bảo EF không nhỏ hơn 1.3
  newEaseFactor = Math.max(1.3, Math.round(newEaseFactor * 10) / 10);

  // Tính ngày ôn tập tiếp theo
  const now = new Date();
  const nextReview = new Date(now.getTime() + newInterval * 24 * 60 * 60 * 1000);

  return {
    nextReview: nextReview.toISOString(),
    intervalDays: newInterval,
    easeFactor: newEaseFactor,
    repetitions: newRepetitions,
  };
}

/**
 * Xác định cấp độ hạt giống dựa trên số lần ôn thành công
 */
export function getPlantStage(repetitions: number, isWithered: boolean = false): PlantStageId {
  if (isWithered) return -1 as unknown as PlantStageId;

  if (repetitions === 0) return 0;
  if (repetitions === 1) return 1;
  if (repetitions === 2) return 2;
  if (repetitions === 3) return 3;
  if (repetitions === 4) return 4;
  if (repetitions === 5) return 5;
  return 6;
}

/**
 * Tính toán trạng thái SRS hoàn chỉnh
 */
export function computeSRSReview(
  quality: 0 | 1 | 2 | 3 | 4 | 5,
  prevProgress: {
    easeFactor: number;
    intervalDays: number;
    repetitions: number;
    plantStage: PlantStageId;
    isWithered: boolean;
    lastReviewed: string | null;
  }
): SRSResult {
  const { nextReview, intervalDays, easeFactor, repetitions } = calculateSRS(
    quality,
    prevProgress.easeFactor,
    prevProgress.intervalDays,
    prevProgress.repetitions
  );

  const isWithered = quality <= 2;
  const plantStage = getPlantStage(repetitions, isWithered);

  return {
    nextReview,
    intervalDays,
    easeFactor,
    repetitions,
    plantStage,
    isWithered,
  };
}

/**
 * Kiểm tra xem từ vựng có cần ôn tập hôm nay không
 */
export function isDueForReview(nextReview: string): boolean {
  const nextReviewDate = new Date(nextReview);
  const now = new Date();
  return nextReviewDate <= now;
}

/**
 * Tính XP thưởng dựa trên chất lượng trả lời và cấp độ hiện tại
 */
export function calculateXP(quality: 0 | 1 | 2 | 3 | 4 | 5, currentStage: PlantStageId): number {
  if (quality <= 2) return 0; // Thất bại không cho XP

  const baseXP = [0, 5, 10, 15, 25, 40, 60];
  const multiplier = currentStage + 1; // Cấp độ cao hơn cho XP nhiều hơn

  return baseXP[currentStage] * multiplier;
}

/**
 * Định dạng thời gian đến ngày ôn tập
 */
export function formatTimeUntilReview(nextReview: string): string {
  const nextReviewDate = new Date(nextReview);
  const now = new Date();
  const diffMs = nextReviewDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (diffDays > 0) {
    return `${diffDays} ngày ${diffHours} giờ`;
  } else if (diffHours > 0) {
    return `${diffHours} giờ`;
  } else {
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${diffMinutes} phút`;
  }
}

/**
 * Tính toán cấp độ hạt giống dựa trên thời gian trôi qua
 */
export function calculatePlantStageFromTime(
  lastReviewed: string,
  currentStage: PlantStageId,
  maxMissedDays: number = 2
): PlantStageId {
  const lastDate = new Date(lastReviewed);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays > maxMissedDays) {
    // Giảm cấp độ nếu bỏ lỡ quá thời gian cho phép
    return Math.max(0, currentStage - 1) as PlantStageId;
  }

  return currentStage;
}