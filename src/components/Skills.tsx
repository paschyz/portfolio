import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 px-8 md:px-16 lg:px-24 bg-tertiary">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Section header */}
        <div className="flex flex-col gap-3">
          <span className="font-outfit text-secondary/50 text-xs tracking-widest uppercase">
            Technical
          </span>
          <h2 className="font-schabo text-5xl md:text-6xl text-secondary">
            Skills
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="font-outfit font-semibold text-secondary/50 text-xs tracking-widest uppercase border-b border-secondary/10 pb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-primary/30 border border-secondary/10 rounded-lg font-outfit text-secondary text-sm hover:bg-primary/60 hover:border-secondary/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
