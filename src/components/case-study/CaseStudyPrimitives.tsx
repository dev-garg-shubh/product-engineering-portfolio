import { ArrowRight, Workflow, type LucideIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";

export type ArchitectureNode = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "accent" | "cloud";
};

export type ArchitectureControl = {
  icon: LucideIcon;
  label: string;
};

export function CaseStudyHeader({
  eyebrow,
  title,
  ownership,
  value,
  aside,
  flagship = false,
}: {
  eyebrow: string;
  title: string;
  ownership: string;
  value: string;
  aside: ReactNode;
  flagship?: boolean;
}) {
  return (
    <header className={flagship ? "flagship-case-header" : "case-study-header"}>
      <div>
        <p className="story-kicker">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="case-study-ownership">{ownership}</p>
        <p className="case-study-value">{value}</p>
      </div>
      {aside}
    </header>
  );
}

export function MarketUniverse({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="case-study-indices" aria-label={label}>
      <span>{label}</span>
      {items.map((item) => <strong key={item}>{item}</strong>)}
    </div>
  );
}

export function StoryColumns({
  columns,
  flagship = false,
}: {
  columns: Array<{ label: string; body: string }>;
  flagship?: boolean;
}) {
  return (
    <div className={`case-study-story-grid${flagship ? " flagship-story-grid" : ""}`}>
      {columns.map((column) => (
        <section key={column.label}>
          <span className="case-study-label">{column.label}</span>
          <p>{column.body}</p>
        </section>
      ))}
    </div>
  );
}

export function ArchitectureFlow({
  title,
  ariaLabel,
  nodes,
  controls,
  className = "",
  children,
}: {
  title: string;
  ariaLabel: string;
  nodes: ArchitectureNode[];
  controls: ArchitectureControl[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`architecture-shell ${className}`.trim()} aria-label={ariaLabel}>
      <div className="architecture-title">
        <Workflow size={18} aria-hidden="true" />
        <span>{title}</span>
      </div>
      <div className="architecture-flow">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <Fragment key={node.title}>
              <div className={`architecture-node${node.tone ? ` ${node.tone}` : ""}`}>
                <Icon size={22} aria-hidden="true" />
                <span>{node.title}</span>
                <small>{node.description}</small>
              </div>
              {index < nodes.length - 1 ? <ArrowRight className="architecture-arrow" aria-hidden="true" /> : null}
            </Fragment>
          );
        })}
      </div>
      <div className="architecture-controls" aria-label={`${title} controls`}>
        {controls.map((control) => {
          const Icon = control.icon;
          return <span key={control.label}><Icon size={15} aria-hidden="true" /> {control.label}</span>;
        })}
      </div>
      {children}
    </div>
  );
}

export function CaseStudyListColumns({ columns, className = "" }: {
  columns: Array<{ label: string; items: string[] }>;
  className?: string;
}) {
  return (
    <div className={`case-study-engineering-grid ${className}`.trim()}>
      {columns.map((column) => (
        <section key={column.label}>
          <span className="case-study-label">{column.label}</span>
          <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ))}
    </div>
  );
}

export function CaseStudyFooter({
  proof,
  stack,
  ariaLabel,
  className = "",
}: {
  proof: ReactNode;
  stack: string[];
  ariaLabel: string;
  className?: string;
}) {
  return (
    <div className={`case-study-footer ${className}`.trim()}>
      {proof}
      <div className="tag-row" aria-label={ariaLabel}>
        {stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}
