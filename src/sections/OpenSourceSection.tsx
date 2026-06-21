import { ArrowRight, GitFork } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionBlock } from "../components/MotionBlock";
import { platformConfig } from "../config/platform";

export function OpenSourceSection() {
  return (
    <section className="open-source-section" aria-labelledby="open-source-title">
      <MotionBlock className="open-source-inner">
        <div>
          <p className="eyebrow">Open source</p>
          <h2 id="open-source-title">Build your own version.</h2>
        </div>
        <div>
          <p>
            I have kept this portfolio platform open source so other developers can use the system, replace the
            configuration with their own work, and shape the experience around their story without starting from zero.
          </p>
          <div className="open-source-actions">
            <Link to={platformConfig.developerPage}>
              Developer guide <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={platformConfig.repositoryUrl} target="_blank" rel="noreferrer">
              <GitFork size={16} aria-hidden="true" /> View source
            </a>
          </div>
        </div>
      </MotionBlock>
    </section>
  );
}
