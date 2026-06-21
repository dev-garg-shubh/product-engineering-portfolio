import { Activity, ArrowDownRight, Braces, CloudCog, Database, PanelsTopLeft } from "lucide-react";
import { ContactActions } from "../components/ContactActions";
import { MotionBlock } from "../components/MotionBlock";
import { profile } from "../config/profile";
import type { PortfolioView } from "../hooks/usePortfolioView";

const systemLayers = [
  { icon: PanelsTopLeft, label: "Interfaces", detail: "React product workflows" },
  { icon: Braces, label: "Services", detail: "Java, Node.js, FastAPI" },
  { icon: Database, label: "Data", detail: "PostgreSQL, Redis, event flows" },
  { icon: CloudCog, label: "Delivery", detail: "Docker, AWS, CI/CD" },
];

export function Hero({ view }: {
  view: PortfolioView;
}) {
  return (
    <section className="hero" id="top">
      <img className="hero-art" src="/shubh-portfolio-og.png" alt="" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <MotionBlock className="hero-copy">
          <p className="hero-edition">Portfolio / Product systems / 2026</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          {view === "overview" ? <p className="status-pill">{profile.availability}</p> : null}
          <p className="hero-intro" aria-live="polite" key={view}>{profile.intro[view]}</p>
          <ContactActions />
        </MotionBlock>

        <MotionBlock className="signal-panel" delay={0.12}>
          <div className="signal-header">
            <span><Activity size={16} aria-hidden="true" /> Product system</span>
            <small>End to end</small>
          </div>
          <div className="system-layer-map" aria-label="Full-stack product layers">
            {systemLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={layer.label}>
                  <span>0{index + 1}</span>
                  <Icon size={18} aria-hidden="true" />
                  <strong>{layer.label}</strong>
                  <small>{layer.detail}</small>
                </div>
              );
            })}
          </div>
          <div className="workspace-shortcuts">
            <a href="#trader-buddy">Start with projects <ArrowDownRight size={16} aria-hidden="true" /></a>
            <a href="#experience">Read the timeline <ArrowDownRight size={16} aria-hidden="true" /></a>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
