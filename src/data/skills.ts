export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML & CSS", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "GraphQL"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Figma", "Docker", "Vercel", "Linux", "VS Code"],
  },
];
