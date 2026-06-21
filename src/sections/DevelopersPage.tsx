import { ArrowLeft, ArrowUpRight, Braces, FileJson2, GitFork, Palette, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionBlock } from "../components/MotionBlock";
import { platformConfig } from "../config/platform";

const configAreas = [
  {
    icon: FileJson2,
    file: "src/config/profile.ts",
    title: "Content",
    body: "Identity, contact links, project cards, case-study copy, experience, skills, and proof points.",
  },
  {
    icon: Route,
    file: "src/config/platform.ts",
    title: "Platform",
    body: "Branding, navigation, audience modes, repository metadata, and dedicated project routes.",
  },
  {
    icon: Braces,
    file: "src/sections/case-studies/",
    title: "Case studies",
    body: "Composable product narratives built from shared headers, architecture flows, evidence, and stack primitives.",
  },
  {
    icon: Palette,
    file: "src/styles.css",
    title: "Theme",
    body: "Dark and light design tokens, responsive layout, editorial typography, and system-map presentation.",
  },
];

export function DevelopersPage() {
  return (
    <section className="developers-page">
      <MotionBlock className="developers-hero">
        <div className="developers-route-bar">
          <Link to="/"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</Link>
          <span><GitFork size={15} aria-hidden="true" /> MIT licensed</span>
        </div>
        <p className="eyebrow">For developers</p>
        <h1>Make the platform yours.</h1>
        <p>
          This portfolio is designed as a typed, config-driven React system. Replace the profile content,
          register your project routes, tune the theme, and keep the interaction model without rebuilding the shell.
        </p>
        <a className="button primary" href={platformConfig.repositoryUrl} target="_blank" rel="noreferrer">
          <GitFork size={18} aria-hidden="true" /> View source <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </MotionBlock>

      <MotionBlock className="developer-config-map" delay={0.05}>
        <p className="eyebrow">Configuration map</p>
        <div>
          {configAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.file}>
                <Icon size={20} aria-hidden="true" />
                <span>{area.file}</span>
                <h2>{area.title}</h2>
                <p>{area.body}</p>
              </article>
            );
          })}
        </div>
      </MotionBlock>

      <MotionBlock className="developer-quickstart" delay={0.08}>
        <div>
          <p className="eyebrow">Quick start</p>
          <h2>From fork to local portfolio.</h2>
          <ol>
            <li>Fork or clone the public repository.</li>
            <li>Install dependencies with pnpm.</li>
            <li>Replace profile content and public assets.</li>
            <li>Register each project and its case-study route.</li>
            <li>Run the production build before deployment.</li>
          </ol>
        </div>
        <pre aria-label="Portfolio setup commands"><code>{`pnpm install
pnpm run dev
pnpm build`}</code></pre>
      </MotionBlock>

      <MotionBlock className="developer-deployment" delay={0.1}>
        <p className="eyebrow">Deployment</p>
        <h2>Static by design.</h2>
        <p>
          The repository includes route rewrites for Vercel and Netlify. Any static host works when all application
          paths fall back to <code>index.html</code>.
        </p>
        <a href={platformConfig.repositoryUrl} target="_blank" rel="noreferrer">
          Read the complete README <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </MotionBlock>
    </section>
  );
}
