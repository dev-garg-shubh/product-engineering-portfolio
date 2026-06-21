import { Braces, UserRoundSearch } from "lucide-react";
import { platformConfig } from "../config/platform";
import type { PortfolioView } from "../hooks/usePortfolioView";

const options = [
  { value: "overview" as const, label: platformConfig.modes.overview, icon: UserRoundSearch },
  { value: "technical" as const, label: platformConfig.modes.technical, icon: Braces },
];

export function ViewModeControl({
  value,
  onChange,
  compact = false,
}: {
  value: PortfolioView;
  onChange: (value: PortfolioView) => void;
  compact?: boolean;
}) {
  return (
    <div className={`view-mode-control${compact ? " compact" : ""}`} aria-label="Portfolio viewing mode">
      {options.map((option) => {
        const Icon = option.icon;
        const active = value === option.value;
        return (
          <button
            type="button"
            className={active ? "active" : ""}
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            key={option.value}
          >
            <Icon size={compact ? 15 : 18} aria-hidden="true" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
