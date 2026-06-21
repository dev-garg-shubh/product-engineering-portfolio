import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { caseStudyRoutes, getCaseStudyRoute, type CaseStudyKey } from "../config/platform";
import { workProjects } from "../config/profile";
import { OptionsPipelineCaseStudy } from "./case-studies/OptionsPipelineCaseStudy";
import { SprihPlatformCaseStudy } from "./case-studies/SprihPlatformCaseStudy";
import { TraderPlatformCaseStudy } from "./case-studies/TraderPlatformCaseStudy";

const caseStudyComponents: Record<CaseStudyKey, ComponentType> = {
  optionsIntelligence: TraderPlatformCaseStudy,
  cloudPipeline: OptionsPipelineCaseStudy,
  sprihPlatform: SprihPlatformCaseStudy,
};

export function CaseStudyPage({ projectId }: { projectId: string }) {
  const route = getCaseStudyRoute(projectId);
  const routeIndex = caseStudyRoutes.findIndex((item) => item.projectId === projectId);
  const projectIndex = workProjects.findIndex((item) => item.id === projectId);
  const project = workProjects[projectIndex];
  const previous = caseStudyRoutes[routeIndex - 1];
  const next = caseStudyRoutes[routeIndex + 1];
  const CaseStudy = caseStudyComponents[route.key];

  useEffect(() => {
    document.title = `${project.title} | Shubh Garg`;
    return () => { document.title = "Shubh Garg | Full-Stack Developer"; };
  }, [project.title]);

  return (
    <section className="case-study-page" aria-label={`${project.title} case study`}>
      <div className="case-study-route-bar">
        <Link to="/#work-studio"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>
        <span>Case study {String(routeIndex + 1).padStart(2, "0")} / {String(caseStudyRoutes.length).padStart(2, "0")}</span>
        <strong className={`project-status ${project.status.toLowerCase()}`}>{project.status}</strong>
      </div>

      <CaseStudy />

      <nav className="case-study-page-navigation" aria-label="Case study navigation">
        {previous ? (
          <Link to={previous.path} className="previous-project">
            <ArrowLeft size={18} aria-hidden="true" />
            <span><small>Previous project</small>{workProjects.find((item) => item.id === previous.projectId)?.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={next.path} className="next-project">
            <span><small>Next project</small>{workProjects.find((item) => item.id === next.projectId)?.title}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ) : (
          <Link to="/#contact" className="next-project">
            <span><small>Finished reading</small>Start a conversation</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </section>
  );
}
