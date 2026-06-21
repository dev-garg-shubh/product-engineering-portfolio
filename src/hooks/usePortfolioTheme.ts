import { useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

function getInitialTheme(): ThemeMode {
  try {
    return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
  };
}
