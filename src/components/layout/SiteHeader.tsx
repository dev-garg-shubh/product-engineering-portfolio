import { BriefcaseBusiness, FolderKanban, Moon, Send, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { platformConfig } from "../../config/platform";
import { ViewModeControl } from "../ViewModeControl";
import type { ThemeMode } from "../../hooks/usePortfolioTheme";
import type { PortfolioView } from "../../hooks/usePortfolioView";

export function SiteHeader({
  theme,
  view,
  onChangeView,
  onToggleTheme,
}: {
  theme: ThemeMode;
  view: PortfolioView;
  onChangeView: (view: PortfolioView) => void;
  onToggleTheme: () => void;
}) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const navigationIcons = {
    projects: FolderKanban,
    experience: BriefcaseBusiness,
    contact: Send,
  };

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/#top" aria-label="Shubh Garg home">
        <span>{platformConfig.brand.initials}</span>
        <strong>{platformConfig.brand.name}</strong>
        <small>{platformConfig.brand.productLabel}</small>
      </Link>
      <nav aria-label="Primary navigation">
        {platformConfig.navigation.map((item) => {
          const Icon = navigationIcons[item.key];
          return (
            <Link to={item.to} key={item.key}>
              <Icon size={17} aria-hidden="true" /> <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="header-workspace-controls">
        <span className="control-label">Viewing lens</span>
        <ViewModeControl value={view} onChange={onChangeView} compact />
      </div>
      <div className="header-footer">
        <span>
          <i aria-hidden="true" />
          {view === "overview" ? "Open to remote roles" : "Interfaces · services · data"}
        </span>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${nextTheme} mode`}>
          {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
