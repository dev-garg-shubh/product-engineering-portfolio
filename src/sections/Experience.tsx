import { MotionBlock } from "../components/MotionBlock";
import { timeline } from "../config/profile";
import type { PortfolioView } from "../hooks/usePortfolioView";

export function Experience({ view }: { view: PortfolioView }) {
  return (
    <section className="section experience-section" id="experience">
      <MotionBlock className="section-heading compact"><p className="eyebrow">Experience</p></MotionBlock>
      <div className="timeline">
        {timeline.map((item, index) => (
          <MotionBlock className="timeline-item" delay={index * 0.06} key={`${item.role}-${item.period}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-org">{item.organization} - {item.location}</p>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
                {view === "overview"
                  ? item.overviewOnlyPoints?.map((point) => <li key={point}>{point}</li>)
                  : null}
              </ul>
            </div>
          </MotionBlock>
        ))}
      </div>
    </section>
  );
}
