import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  ChartSpline,
  CloudCog,
  Database,
  History,
  Radio,
  ServerCog,
} from "lucide-react";
import type { CSSProperties, ReactElement } from "react";
import type { WorkProject } from "../../config/profile";

const intelligenceBars = [34, 48, 42, 66, 58, 82, 72, 92, 78, 86];
const tradingBars = [68, 42, 82, 56, 92, 64];

function IntelligencePreview() {
  return (
    <div className="clone-preview intelligence-preview" aria-hidden="true">
      <div className="intelligence-preview-head">
        <span><Radio size={16} /> Live market</span>
        <strong>NIFTY</strong>
        <strong>BANKNIFTY</strong>
        <strong>SENSEX</strong>
      </div>
      <div className="intelligence-preview-chart">
        {intelligenceBars.map((height, index) => (
          <span key={`${height}-${index}`} style={{ "--height": `${height}%` } as CSSProperties} />
        ))}
      </div>
      <div className="intelligence-preview-rail">
        <span><Activity size={15} /> Pressure</span>
        <span><History size={15} /> Replay</span>
        <span><ChartSpline size={15} /> Backtest</span>
        <span><BookOpenCheck size={15} /> Journal</span>
      </div>
    </div>
  );
}

function TradingPreview() {
  return (
    <div className="clone-preview dashboard-preview" aria-hidden="true">
      <div className="preview-toolbar"><span /><span /><span /></div>
      <div className="preview-chart">
        {tradingBars.map((height) => (
          <span key={height} style={{ "--height": `${height}%` } as CSSProperties} />
        ))}
      </div>
      <div className="preview-table"><span /><span /><span /></div>
    </div>
  );
}

function CloudPreview() {
  return (
    <div className="clone-preview realtime-preview" aria-hidden="true">
      <div className="preview-feed"><span /><span /><span /></div>
      <div className="preview-pulse" />
      <div className="preview-notification" />
    </div>
  );
}

function PipelinePreview() {
  return (
    <div className="clone-preview pipeline-preview" aria-hidden="true">
      <div className="pipeline-mini-node"><Activity size={19} /><span>Dhan</span></div>
      <ArrowRight className="pipeline-mini-arrow" size={18} />
      <div className="pipeline-mini-node core"><ServerCog size={19} /><span>Python</span></div>
      <ArrowRight className="pipeline-mini-arrow" size={18} />
      <div className="pipeline-mini-node"><Database size={19} /><span>Postgres</span></div>
      <div className="pipeline-cloud-line"><CloudCog size={17} /><span>ECS Fargate</span></div>
    </div>
  );
}

function PlatformPreview() {
  return (
    <div className="clone-preview admin-preview" aria-hidden="true">
      <div className="preview-sidebar"><span /><span /><span /><span /></div>
      <div className="preview-admin-body"><span /><span /><span /><span /></div>
    </div>
  );
}

const previewComponents: Record<WorkProject["preview"], () => ReactElement> = {
  intelligence: IntelligencePreview,
  trading: TradingPreview,
  cloud: CloudPreview,
  pipeline: PipelinePreview,
  platform: PlatformPreview,
};

export function WorkPreview({ preview }: { preview: WorkProject["preview"] }) {
  const Preview = previewComponents[preview];
  return <Preview />;
}
