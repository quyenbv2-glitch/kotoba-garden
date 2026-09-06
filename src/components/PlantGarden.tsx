import { useState, useEffect } from "react";
import { PlantStageId, UserWordProgress, PLANT_STAGES, WITHERED_STAGE } from "../types/kotoba";
import { PlantStageBadge } from "./ui/plant-stage-badge";
import { formatTimeUntilReview } from "../utils/srsCalculator";

interface PlantGardenProps {
  progress: UserWordProgress[];
  words: Map<string, any>;
  onWordClick?: (wordId: string) => void;
}

export function PlantGarden({ progress, words, onWordClick }: PlantGardenProps) {
  const [filter, setFilter] = useState<"all" | PlantStageId | "withered">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Đếm số từ theo stage
  const stageCounts = progress.reduce(
    (acc, p) => {
      if (p.isWithered) {
        acc.withered++;
      } else {
        acc[p.plantStage]++;
      }
      return acc;
    },
    { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, withered: 0 }
  );

  // Lọc từ vựng
  const filteredProgress = progress.filter((p) => {
    // Lọc theo stage
    if (filter !== "all") {
      if (filter === "withered") {
        if (!p.isWithered) return false;
      } else {
        if (p.plantStage !== filter) return false;
      }
    }

    // Lọc theo tìm kiếm
    if (searchQuery) {
      const word = words.get(p.wordId);
      if (!word) return false;
      const query = searchQuery.toLowerCase();
      return (
        word.kanji.toLowerCase().includes(query) ||
        word.meaning.toLowerCase().includes(query) ||
        word.romaji.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Sắp xếp theo nextReview
  const sortedProgress = [...filteredProgress].sort((a, b) => {
    return new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime();
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">🌱 Vườn Kotoba</h2>
          <p className="text-sm text-gray-500">
            Theo dõi tiến trình học tập của bạn
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Tổng:</span>
          <span className="text-lg font-bold text-emerald-600">
            {progress.length}
          </span>
          <span className="text-sm text-gray-500">từ</span>
        </div>
      </div>

      {/* Stage Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`p-3 rounded-lg border text-center transition-all ${
            filter === "all"
              ? "bg-emerald-50 border-emerald-300 text-emerald-700"
              : "bg-white border-gray-200 hover:border-emerald-200"
          }`}
        >
          <div className="text-2xl mb-1">🌱</div>
          <div className="text-lg font-bold">{progress.length}</div>
          <div className="text-xs text-gray-500">Tất cả</div>
        </button>
        {([0, 1, 2, 3, 4, 5, 6] as PlantStageId[]).map((stage) => (
          <button
            key={stage}
            onClick={() => setFilter(stage)}
            className={`p-3 rounded-lg border text-center transition-all ${
              filter === stage
                ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                : "bg-white border-gray-200 hover:border-emerald-200"
            }`}
          >
            <div className="text-2xl mb-1">{PLANT_STAGES[stage].emoji}</div>
            <div className="text-lg font-bold">{stageCounts[stage]}</div>
            <div className="text-xs text-gray-500">{PLANT_STAGES[stage].label}</div>
          </button>
        ))}
        <button
          onClick={() => setFilter("withered")}
          className={`p-3 rounded-lg border text-center transition-all ${
            filter === "withered"
              ? "bg-amber-50 border-amber-300 text-amber-700"
              : "bg-white border-gray-200 hover:border-amber-200"
          }`}
        >
          <div className="text-2xl mb-1">🍂</div>
          <div className="text-lg font-bold">{stageCounts.withered}</div>
          <div className="text-xs text-gray-500">Héo</div>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm từ vựng..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      {/* Word List */}
      <div className="space-y-2">
        {sortedProgress.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">🌱</div>
            <p>Chưa có từ vựng nào</p>
            <p className="text-sm">Hãy thêm từ vựng để bắt đầu trồng cây!</p>
          </div>
        ) : (
          sortedProgress.map((progress) => {
            const word = words.get(progress.wordId);
            if (!word) return null;

            return (
              <button
                key={progress.wordId}
                onClick={() => onWordClick?.(progress.wordId)}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-white hover:bg-emerald-50 hover:border-emerald-200 transition-all text-left"
              >
                {/* Kanji */}
                <div className="text-3xl font-bold text-gray-800 min-w-[60px] text-center">
                  {word.kanji}
                </div>

                {/* Kana & Romaji */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-600">{word.kana}</span>
                    <span className="text-sm text-gray-400">{word.romaji}</span>
                  </div>
                  <div className="text-sm text-gray-500">{word.meaning}</div>
                </div>

                {/* Plant Stage */}
                <PlantStageBadge
                  stage={progress.plantStage}
                  isWithered={progress.isWithered}
                  size="sm"
                />

                {/* Next Review */}
                <div className="text-xs text-gray-400 whitespace-nowrap">
                  {formatTimeUntilReview(progress.nextReview)}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
