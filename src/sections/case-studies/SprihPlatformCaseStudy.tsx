import {
  Blocks,
  ChartNoAxesCombined,
  DatabaseZap,
  ExternalLink,
  FileCheck2,
  Layers3,
  ServerCog,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import {
  ArchitectureFlow,
  CaseStudyFooter,
  CaseStudyHeader,
  CaseStudyListColumns,
  StoryColumns,
  type ArchitectureControl,
  type ArchitectureNode,
} from "../../components/case-study/CaseStudyPrimitives";
import { MotionBlock } from "../../components/MotionBlock";
import { sprihPlatformCaseStudy } from "../../config/profile";

const architectureNodes: ArchitectureNode[] = [
  { icon: UploadCloud, title: "Operational data", description: "Facilities, uploads, activity and emissions inputs" },
  { icon: Layers3, title: "React product layer", description: "Role-aware workflows, management UI and charts", tone: "accent" },
  { icon: ServerCog, title: "Java services", description: "REST APIs, validation and async workflows" },
  { icon: FileCheck2, title: "Analysis + reporting", description: "Dashboards, review surfaces and audit-ready context", tone: "cloud" },
];

const architectureControls: ArchitectureControl[] = [
  { icon: UsersRound, label: "Users + facilities" },
  { icon: DatabaseZap, label: "Bulk + async operations" },
  { icon: ChartNoAxesCombined, label: "Reusable data visuals" },
  { icon: Blocks, label: "Shared product patterns" },
];

export function SprihPlatformCaseStudy() {
  return (
    <MotionBlock className="sprih-case-study">
      <article id={sprihPlatformCaseStudy.id}>
        <CaseStudyHeader
          eyebrow={sprihPlatformCaseStudy.eyebrow}
          title={sprihPlatformCaseStudy.title}
          ownership={sprihPlatformCaseStudy.ownership}
          value={sprihPlatformCaseStudy.value}
          aside={(
            <div className="sprih-tenure" aria-label="Sprih employment tenure">
              <strong>{sprihPlatformCaseStudy.tenure}</strong>
              <span>{sprihPlatformCaseStudy.boundary}</span>
            </div>
          )}
        />

        <StoryColumns columns={[
          { label: "Product problem", body: sprihPlatformCaseStudy.context },
          { label: "My role", body: sprihPlatformCaseStudy.role },
        ]} />

        <ArchitectureFlow
          title="Enterprise sustainability product flow"
          ariaLabel="Sprih platform product architecture"
          nodes={architectureNodes}
          controls={architectureControls}
          className="sprih-architecture"
        />

        <CaseStudyListColumns className="technical-case-columns" columns={[
          { label: "Product surfaces", items: sprihPlatformCaseStudy.productSurfaces },
          { label: "Full-stack engineering", items: sprihPlatformCaseStudy.engineering },
        ]} />

        <CaseStudyFooter
          ariaLabel="Sprih platform technology stack"
          stack={sprihPlatformCaseStudy.stack}
          proof={(
            <p>
              <FileCheck2 size={18} aria-hidden="true" />
              {sprihPlatformCaseStudy.proof}
            </p>
          )}
        />

        <a
          className="company-product-link"
          href={sprihPlatformCaseStudy.website}
          target="_blank"
          rel="noreferrer"
        >
          View Sprih's public platform
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </article>
    </MotionBlock>
  );
}
