import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
}
