import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { getCaseStudyRoute } from "../../config/platform";
import type { WorkProject } from "../../config/profile";
import { MotionBlock } from "../MotionBlock";
import { TechLogo } from "./TechLogo";
import { WorkPreview } from "./WorkPreview";

export function WorkProjectCard({
  project,
  index,
  delay = 0,
}: {
  project: WorkProject;
  index: number;
  delay?: number;
}) {
  const route = getCaseStudyRoute(project.id);

  return (
    <MotionBlock
      className={`clone-card work-project-card${project.featured ? " flagship-project-card" : ""}`}
      delay={delay}
    >
      <article id={project.id}>
        <div className="project-chapter">
          <span>Project {String(index + 1).padStart(2, "0")}</span>
          <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
        </div>
        <WorkPreview preview={project.preview} />
        <div className="clone-card-top">
          <div className="project-stack-icons" aria-label={`${project.title} stack`}>
            {project.techs.map((tech) => <TechLogo tech={tech} key={tech} />)}
          </div>
          <span>{project.kicker}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.proof ? (
          <span className="project-proof">
            <ShieldCheck size={16} aria-hidden="true" />
            {project.proof}
          </span>
        ) : null}
        <div className="tag-row" aria-label={`${project.title} stack and focus tags`}>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <Link className="clone-link" to={route.path} aria-label={`Open ${project.title}`}>
          {project.linkLabel ?? "Open work"}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </MotionBlock>
  );
}
