import { useMemo } from "react";
import { UserWordProgress, PlantStageId, PLANT_STAGES } from "../types/kotoba";

interface StatisticsProps {
  progress: UserWordProgress[];
  words: Map<string, any>;
  profile: {
    totalXp?: number;
    streakCount?: number;
    wordsLearned?: number;
    reviewsCompleted?: number;
  } | null;
}

export function Statistics({ progress, words, profile }: StatisticsProps) {
  // Tính toán thống kê
  const stats = useMemo(() => {
    const total = progress.length;
    const withered = progress.filter((p) => p.isWithered).length;

    // Đếm theo stage
    const byStage: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    progress.forEach((p) => {
      if (!p.isWithered) byStage[p.plantStage] = (byStage[p.plantStage] || 0) + 1;
    });

    // Đếm từ sắp đến hạn (trong 24h tới)
    const now = Date.now();
    const dueSoon = progress.filter((p) => {
      const next = new Date(p.nextReview).getTime();
      return next <= now + 24 * 60 * 60 * 1000 && !p.isWithered;
    }).length;

    // Tỉ lệ thành thạo (stage 5-6)
    const mastered = (byStage[5] || 0) + (byStage[6] || 0);
    const masteryRate = total > 0 ? Math.round((mastered / total) * 100) : 0;

    // Tổng XP và reviews từ profile hoặc tính từ progress
    const totalXp = profile?.totalXp ?? progress.reduce((sum, p) => sum + (p.repetitionCount || 0) * 5, 0);
    const reviewsCompleted = profile?.reviewsCompleted ?? progress.reduce((sum, p) => sum + (p.repetitionCount || 0), 0);

    return {
      total,
      withered,
      byStage,
      dueSoon,
      mastered,
      masteryRate,
      totalXp,
      reviewsCompleted,
    };
  }, [progress, profile]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">📊 Thống kê học tập</h2>
        <p className="text-sm text-gray-500">Theo dõi tiến trình và thành tích của bạn</p>
      </div>

      {/* Top stats - Grid 4 cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
          <div className="text-3xl mb-1">📚</div>
          <div className="text-2xl font-bold text-emerald-700">{stats.total}</div>
          <div className="text-sm text-emerald-600">Tổng số từ</div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
          <div className="text-3xl mb-1">🔥</div>
          <div className="text-2xl font-bold text-amber-700">{profile?.streakCount ?? 0}</div>
          <div className="text-sm text-amber-600">Ngày liên tục</div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <div className="text-3xl mb-1">💎</div>
          <div className="text-2xl font-bold text-purple-700">{stats.totalXp}</div>
          <div className="text-sm text-purple-600">Tổng XP</div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200">
          <div className="text-3xl mb-1">✅</div>
          <div className="text-2xl font-bold text-sky-700">{stats.reviewsCompleted}</div>
          <div className="text-sm text-sky-600">Lượt ôn tập</div>
        </div>
      </div>

      {/* Mastery progress */}
      <div className="p-5 rounded-xl bg-white border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">Tỉ lệ thành thạo</h3>
          <span className="text-2xl font-bold text-emerald-600">{stats.masteryRate}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-500"
            style={{ width: `${stats.masteryRate}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {stats.mastered} / {stats.total} từ đã đạt giai đoạn cuối (Hoa 🌸 / Quả 🍎)
        </p>
      </div>

      {/* Plant stage distribution */}
      <div className="p-5 rounded-xl bg-white border border-gray-200">
        <h3 className="font-bold text-gray-800 mb-4">Phân bố giai đoạn cây</h3>
        <div className="space-y-2">
          {([0, 1, 2, 3, 4, 5, 6] as PlantStageId[]).map((stage) => {
            const count = stats.byStage[stage] || 0;
            const pct = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;
            const stageInfo = PLANT_STAGES[stage];
            return (
              <div key={stage} className="flex items-center gap-3">
                <div className="text-2xl w-8 text-center">{stageInfo.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700">{stageInfo.label}</span>
                    <span className="text-gray-500">{count} từ ({pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {stats.withered > 0 && (
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="text-2xl w-8 text-center">🍂</div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-amber-700">Cây héo</span>
                  <span className="text-gray-500">{stats.withered} từ</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">⏰</span>
            <span className="font-semibold text-orange-800">Sắp đến hạn</span>
          </div>
          <p className="text-sm text-orange-700">
            <span className="text-2xl font-bold">{stats.dueSoon}</span> từ cần ôn trong 24h tới
          </p>
        </div>
        <div className="p-4 rounded-xl bg-pink-50 border border-pink-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">💧</span>
            <span className="font-semibold text-pink-800">Cần tưới nước</span>
          </div>
          <p className="text-sm text-pink-700">
            <span className="text-2xl font-bold">{stats.withered}</span> từ đang héo cần hồi sinh
          </p>
        </div>
      </div>
    </div>
  );
}
