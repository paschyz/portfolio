import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 px-8 md:px-16 lg:px-24 bg-primary">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Section header */}
        <div className="flex flex-col gap-3">
          <span className="font-outfit text-secondary/50 text-xs tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="font-schabo text-5xl md:text-6xl text-secondary">
            Projects
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-4 p-6 bg-tertiary/50 border border-secondary/10 rounded-2xl hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-schabo text-2xl text-secondary">
                  {project.name}
                </h3>
                <span className="font-outfit text-secondary/30 text-xs">{project.year}</span>
              </div>

              <p className="font-outfit text-secondary/60 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-primary/80 border border-secondary/10 rounded-md font-outfit text-secondary/60 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-secondary/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-outfit text-secondary/50 text-xs hover:text-secondary transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-outfit text-secondary/50 text-xs hover:text-secondary transition-colors"
                >
                  Live →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
