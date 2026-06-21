import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { platformConfig } from "../../config/platform";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <span>{platformConfig.brand.name}</span>
      <div className="footer-links">
        <Link to="/#top" onClick={scrollToTop}>
          Back to top <ArrowUp size={15} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
