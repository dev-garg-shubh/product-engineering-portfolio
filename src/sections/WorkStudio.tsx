import { MotionBlock } from "../components/MotionBlock";
import { WorkProjectCard } from "../components/work/WorkProjectCard";
import { workProjects } from "../config/profile";
import type { PortfolioView } from "../hooks/usePortfolioView";

const studioCopy = {
  overview: {
    eyebrow: "Selected product work",
    title: "Three systems. Clear ownership. Verifiable scope.",
    body: "Start with the product value, ownership, and verified scope. Technical depth remains available whenever the implementation details matter.",
  },
  technical: {
    eyebrow: "Selected product work",
    title: "Trace the architecture behind every product.",
    body: "Explore live data flows, point-in-time replay, cloud ingestion, Java services, reliability controls, and the decisions behind them.",
  },
};

export function WorkStudio({ view }: { view: PortfolioView }) {
  const copy = studioCopy[view];

  return (
    <section className="clone-section" id="work-studio" aria-label="Featured work studio">
      <MotionBlock className="section-heading clone-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </MotionBlock>

      <div className="clone-grid work-project-grid">
        {workProjects.map((project, index) => (
          <WorkProjectCard project={project} index={index} delay={(index % 2) * 0.06} key={project.id} />
        ))}
      </div>
    </section>
  );
}
