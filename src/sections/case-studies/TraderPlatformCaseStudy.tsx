import {
  Activity,
  BookOpenCheck,
  CalendarClock,
  ChartSpline,
  Database,
  History,
  Radio,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Workflow,
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
import { traderPlatformCaseStudy } from "../../config/profile";

const architectureNodes: ArchitectureNode[] = [
  { icon: Radio, title: "Dhan broker feed", description: "Ticks + option-chain snapshots" },
  { icon: ServerCog, title: "Async FastAPI core", description: "Normalize events + market analytics", tone: "accent" },
  { icon: Database, title: "Event bus + Redis", description: "Fanout, persistence, replay sources" },
  { icon: Activity, title: "WebSocket product UI", description: "Live state, charts, controls, freshness", tone: "cloud" },
];

const architectureControls: ArchitectureControl[] = [
  { icon: Activity, label: "Fast tick cadence" },
  { icon: CalendarClock, label: "Slower chain / OI cadence" },
  { icon: ShieldAlert, label: "Stale feed + reconnect" },
  { icon: History, label: "Protected replay clock" },
];

const capabilityMap = [
  { icon: Activity, label: "Live intelligence" },
  { icon: History, label: "Historical replay" },
  { icon: ChartSpline, label: "Backtest + mock execution" },
  { icon: BookOpenCheck, label: "Journal + review" },
  { icon: ShieldAlert, label: "Advisory Shock Detector" },
];

export function TraderPlatformCaseStudy() {
  return (
    <MotionBlock className="flagship-case-study">
      <article id={traderPlatformCaseStudy.id}>
        <CaseStudyHeader
          flagship
          eyebrow={traderPlatformCaseStudy.eyebrow}
          title={traderPlatformCaseStudy.title}
          ownership={traderPlatformCaseStudy.ownership}
          value={traderPlatformCaseStudy.value}
          aside={(
            <div className="flagship-scope" aria-label="Implemented product scope">
              <Workflow size={24} aria-hidden="true" />
              <strong>End to end</strong>
              <span>Live data to research review</span>
            </div>
          )}
        />

        <MarketUniverse label="Active live universe" items={traderPlatformCaseStudy.universe} />
        <StoryColumns
          flagship
          columns={[
            { label: "Problem", body: traderPlatformCaseStudy.problem },
            { label: "Role / ownership", body: traderPlatformCaseStudy.role },
          ]}
        />

        <ArchitectureFlow
          title="Live and research architecture"
          ariaLabel="Options intelligence platform architecture"
          nodes={architectureNodes}
          controls={architectureControls}
          className="flagship-architecture"
        >
          <div className="product-capability-map" aria-label="Connected product capabilities">
            {capabilityMap.map((capability) => {
              const Icon = capability.icon;
              return <span key={capability.label}><Icon size={17} aria-hidden="true" /> {capability.label}</span>;
            })}
          </div>
        </ArchitectureFlow>

        <section className="engineering-challenges" aria-labelledby="engineering-challenges-title">
          <div className="case-study-section-heading">
            <span className="case-study-label">Three engineering challenges</span>
            <h4 id="engineering-challenges-title">Keeping real-time analysis honest across time and data speeds.</h4>
          </div>
          <div className="challenge-grid">
            {traderPlatformCaseStudy.challenges.map((challenge, index) => (
              <article key={challenge.title}>
                <span>0{index + 1}</span>
                <h5>{challenge.title}</h5>
                <p>{challenge.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flagship-capabilities">
          <span className="case-study-label">Product capabilities</span>
          <ul>{traderPlatformCaseStudy.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <CaseStudyListColumns
          className="flagship-proof-grid"
          columns={[
            { label: "Outcomes / proof", items: traderPlatformCaseStudy.proof },
            { label: "Lessons", items: traderPlatformCaseStudy.lessons },
          ]}
        />

        <CaseStudyFooter
          className="flagship-footer"
          ariaLabel="Options intelligence platform technology stack"
          stack={traderPlatformCaseStudy.stack}
          proof={(
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              Advisory by design: the platform describes pressure building, expansion, failure, and risk context; it does not automate live trading.
            </p>
          )}
        />
      </article>
    </MotionBlock>
  );
}
