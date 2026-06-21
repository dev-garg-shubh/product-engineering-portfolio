export type CaseStudyKey = "optionsIntelligence" | "cloudPipeline" | "sprihPlatform";

export const platformConfig = {
  brand: {
    initials: "SG",
    name: "Shubh Garg",
    productLabel: "Product Engineering OS",
  },
  modes: {
    overview: "Recruiter",
    technical: "Developer",
  },
  navigation: [
    { key: "projects", label: "Projects", to: "/#work-studio" },
    { key: "experience", label: "Experience", to: "/#experience" },
    { key: "contact", label: "Contact", to: "/#contact" },
  ],
  developerPage: "/developers",
  repositoryUrl: "https://github.com/dev-garg-shubh/product-engineering-portfolio",
} as const;

export const caseStudyRoutes = [
  {
    key: "optionsIntelligence",
    projectId: "trader-buddy",
    path: "/options-intelligence",
  },
  {
    key: "cloudPipeline",
    projectId: "option-data",
    path: "/cloud-options-pipeline",
  },
  {
    key: "sprihPlatform",
    projectId: "sprih-platform",
    path: "/sprih-platform",
  },
] as const satisfies ReadonlyArray<{
  key: CaseStudyKey;
  projectId: string;
  path: `/${string}`;
}>;

export function getCaseStudyRoute(projectId: string) {
  const route = caseStudyRoutes.find((item) => item.projectId === projectId);
  if (!route) throw new Error(`Missing case-study route for project: ${projectId}`);
  return route;
}
