import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { platformConfig } from "../../config/platform";

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>{platformConfig.brand.name}</span>
      <div className="footer-links">
        <Link to="/#top">Back to top <ArrowUp size={15} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
