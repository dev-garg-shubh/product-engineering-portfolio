import { useEffect, useState } from "react";

export type PortfolioView = "overview" | "technical";

function getInitialView(): PortfolioView {
  try {
    return window.localStorage.getItem("portfolio-view") === "technical" ? "technical" : "overview";
  } catch {
    return "overview";
  }
}

export function usePortfolioView() {
  const [view, setView] = useState<PortfolioView>(getInitialView);

  useEffect(() => {
    document.documentElement.dataset.portfolioView = view;
    window.localStorage.setItem("portfolio-view", view);
  }, [view]);

  return { view, setView };
}
