export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "devnotes",
    name: "DevNotes",
    description:
      "A full-stack markdown note-taking app with real-time sync, tagging, and a distraction-free writing interface. Built for developers who want a keyboard-first experience.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/pascalzhou/devnotes",
    liveUrl: "https://devnotes.pascalzhou.dev",
    year: 2024,
  },
  {
    id: "meteo-paris",
    name: "Météo Paris",
    description:
      "A minimalist weather dashboard for Paris that visualizes hourly and weekly forecasts using animated SVG charts. Integrates the Open-Meteo API with no API key required.",
    tech: ["React", "TypeScript", "Vite", "Open-Meteo API", "SVG"],
    githubUrl: "https://github.com/pascalzhou/meteo-paris",
    liveUrl: "https://meteo.pascalzhou.dev",
    year: 2024,
  },
  {
    id: "palette-gen",
    name: "PaletteGen",
    description:
      "An AI-assisted color palette generator that creates accessible, harmonious color systems from a single seed color. Exports to CSS variables, Tailwind config, or Figma tokens.",
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Vite"],
    githubUrl: "https://github.com/pascalzhou/palette-gen",
    liveUrl: "https://palettegen.pascalzhou.dev",
    year: 2025,
  },
];
