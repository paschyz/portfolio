export default function About() {
  const facts = [
    { label: "Location", value: "Paris, France" },
    { label: "Languages", value: "French, English, Chinese" },
    { label: "Focus", value: "Frontend & Full-Stack" },
    { label: "Availability", value: "Open to opportunities" },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-24 px-8 md:px-16 lg:px-24 bg-tertiary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Bio */}
        <div className="flex flex-col gap-6">
          <span className="font-outfit text-secondary/50 text-xs tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-schabo text-5xl md:text-6xl text-secondary">
            Who I Am
          </h2>
          <p className="font-outfit text-secondary/70 text-base leading-relaxed">
            I'm a web developer based in Paris with a passion for building
            clean, performant, and accessible interfaces. I specialize in
            React and TypeScript, and I enjoy the craft of turning complex
            problems into elegant digital experiences.
          </p>
          <p className="font-outfit text-secondary/70 text-base leading-relaxed">
            Whether it's a pixel-perfect UI, a robust API, or a full-stack
            product, I care about every detail of the user experience and
            the quality of the code behind it.
          </p>
        </div>

        {/* Right: Quick facts */}
        <div className="flex flex-col gap-4">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col border-b border-secondary/10 pb-4">
              <span className="font-outfit text-secondary/40 text-xs tracking-widest uppercase">
                {label}
              </span>
              <span className="font-outfit text-secondary text-base">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
