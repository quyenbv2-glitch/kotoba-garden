import { PlantStageId, PLANT_STAGES, WITHERED_STAGE } from "../types/kotoba";

interface PlantStageBadgeProps {
  stage: PlantStageId;
  isWithered?: boolean;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function PlantStageBadge({
  stage,
  isWithered = false,
  size = "md",
  showLabel = true,
}: PlantStageBadgeProps) {
  const stageInfo = isWithered ? WITHERED_STAGE : PLANT_STAGES[stage];

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${stageInfo.bgLight} ${sizeClasses[size]}`}
    >
      <span className="text-lg">{stageInfo.emoji}</span>
      {showLabel && <span>{stageInfo.label}</span>}
    </span>
  );
}
