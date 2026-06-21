import {
  Activity,
  CalendarClock,
  CloudCog,
  Database,
  GitBranch,
  KeyRound,
  ServerCog,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import {
  ArchitectureFlow,
  CaseStudyFooter,
  CaseStudyHeader,
  CaseStudyListColumns,
  MarketUniverse,
  StoryColumns,
  type ArchitectureControl,
  type ArchitectureNode,
} from "../../components/case-study/CaseStudyPrimitives";
import { MotionBlock } from "../../components/MotionBlock";
import { optionDataCaseStudy } from "../../config/profile";

const architectureNodes: ArchitectureNode[] = [
  { icon: Activity, title: "Market input", description: "Option-chain Greeks + futures quotes" },
  { icon: ServerCog, title: "Python ingestion core", description: "Schedule, resolve, collect, normalize", tone: "accent" },
  { icon: Database, title: "RDS PostgreSQL", description: "Idempotent snapshots + run records" },
  { icon: CloudCog, title: "Cloud operations", description: "ECS, Secrets, CloudWatch, CI/CD", tone: "cloud" },
];

const architectureControls: ArchitectureControl[] = [
  { icon: CalendarClock, label: "Session + holiday gates" },
  { icon: KeyRound, label: "PIN/TOTP renewal" },
  { icon: ShieldCheck, label: "Rate limits + retries" },
  { icon: GitBranch, label: "CI/CD + migrations" },
];

export function OptionsPipelineCaseStudy() {
  return (
    <MotionBlock className="pipeline-case-study">
      <article id={optionDataCaseStudy.id}>
        <CaseStudyHeader
          eyebrow={optionDataCaseStudy.eyebrow}
          title={optionDataCaseStudy.title}
          ownership={optionDataCaseStudy.ownership}
          value={optionDataCaseStudy.value}
          aside={(
            <div className="case-study-proof" aria-label="Automated regression coverage">
              <ShieldCheck size={24} aria-hidden="true" />
              <strong>32</strong>
              <span>automated tests guarding critical paths before deployment</span>
            </div>
          )}
        />

        <MarketUniverse label="Live indices" items={optionDataCaseStudy.indices} />
        <StoryColumns columns={[
          { label: "Problem", body: optionDataCaseStudy.problem },
          { label: "Solution", body: optionDataCaseStudy.solution },
        ]} />
        <ArchitectureFlow
          title="Production data flow"
          ariaLabel="Options market data architecture"
          nodes={architectureNodes}
          controls={architectureControls}
        />
        <CaseStudyListColumns className="technical-case-columns" columns={[
          { label: "Reliability engineering", items: optionDataCaseStudy.reliability },
          { label: "Cloud delivery", items: optionDataCaseStudy.cloud },
        ]} />
        <CaseStudyFooter
          ariaLabel="Cloud options pipeline technology stack"
          stack={optionDataCaseStudy.stack}
          proof={(
            <p>
              <TestTube2 size={18} aria-hidden="true" />
              {optionDataCaseStudy.proof}
            </p>
          )}
        />
      </article>
    </MotionBlock>
  );
}
