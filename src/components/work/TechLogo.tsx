import type { TechKey } from "../../config/profile";

export const techNames: Record<TechKey, string> = {
  react: "React",
  next: "Next.js",
  java: "Java",
  node: "Node.js",
  python: "Python",
  aws: "AWS",
};

export function TechLogo({ tech }: { tech: TechKey }) {
  if (tech === "react") {
    return (
      <svg className="tech-logo react-logo" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="5" />
        <ellipse cx="32" cy="32" rx="27" ry="10" />
        <ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(120 32 32)" />
      </svg>
    );
  }

  if (tech === "java") {
    return (
      <svg className="tech-logo java-logo" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M24 12c8 6-4 10 2 16" />
        <path d="M35 9c10 8-6 12 1 21" />
        <path d="M18 36c8 4 24 4 32 0" />
        <path d="M20 44c7 5 22 5 29 0" />
        <path d="M22 52c6 3 18 3 24 0" />
      </svg>
    );
  }

  const logoText: Record<Exclude<TechKey, "react" | "java">, string> = {
    next: "N",
    node: "JS",
    python: "Py",
    aws: "AWS",
  };

  return (
    <span className={`tech-logo ${tech}-logo`} aria-hidden="true">
      {logoText[tech]}
    </span>
  );
}
