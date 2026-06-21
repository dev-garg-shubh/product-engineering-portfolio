import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollManager } from "./components/ScrollManager";
import { caseStudyRoutes, platformConfig } from "./config/platform";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { usePortfolioTheme } from "./hooks/usePortfolioTheme";
import { usePortfolioView, type PortfolioView } from "./hooks/usePortfolioView";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { OpenSourceSection } from "./sections/OpenSourceSection";
import { WorkStudio } from "./sections/WorkStudio";
import { CaseStudyPage } from "./sections/CaseStudyPage";
import { DevelopersPage } from "./sections/DevelopersPage";

function HomePage({ view }: {
  view: PortfolioView;
}) {
  return (
    <>
      <Hero view={view} />
      <WorkStudio view={view} />
      <Experience view={view} />
      <Contact view={view} />
      <OpenSourceSection />
    </>
  );
}

export default function App() {
  const { theme, toggleTheme } = usePortfolioTheme();
  const { view, setView } = usePortfolioView();

  return (
    <div className="app-shell" data-view={view}>
      <ScrollManager />
      <SiteHeader
        theme={theme}
        view={view}
        onChangeView={setView}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage view={view} />} />
          {caseStudyRoutes.map((route) => (
            <Route path={route.path} element={<CaseStudyPage projectId={route.projectId} />} key={route.path} />
          ))}
          <Route path={platformConfig.developerPage} element={<DevelopersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
