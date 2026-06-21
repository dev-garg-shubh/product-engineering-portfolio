import { ArrowRight, GitFork } from "lucide-react";
import { Link } from "react-router-dom";
import { platformConfig } from "../../config/platform";

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>{platformConfig.brand.name}</span>
      <div className="footer-links">
        <Link to={platformConfig.developerPage}>For developers <ArrowRight size={15} aria-hidden="true" /></Link>
        <a href={platformConfig.repositoryUrl} target="_blank" rel="noreferrer">
          <GitFork size={15} aria-hidden="true" /> Source
        </a>
        <Link to="/#top">Back to top <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
