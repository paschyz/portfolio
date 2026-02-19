export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "pascal.zhou.pro@gmail.com",
      href: "mailto:pascal.zhou.pro@gmail.com",
      description: "Send me a message",
    },
    {
      label: "GitHub",
      value: "github.com/paschyz",
      href: "https://github.com/paschyz",
      description: "See my code",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pascal-zhou",
      href: "https://www.linkedin.com/in/pascal-zhou",
      description: "Connect with me",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-8 md:px-16 lg:px-24 bg-primary">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="font-outfit text-secondary/50 text-xs tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-schabo text-5xl md:text-6xl text-secondary">
            Let's Work Together
          </h2>
          <p className="font-outfit text-secondary/60 text-base leading-relaxed">
            I'm currently open to freelance projects and full-time positions.
            Feel free to reach out — I'd love to hear from you.
          </p>
        </div>

        {/* Link cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {links.map(({ label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              className="flex flex-col gap-2 p-6 bg-tertiary/40 border border-secondary/10 rounded-2xl hover:border-secondary/40 hover:bg-tertiary/70 transition-all duration-300 text-left group"
            >
              <span className="font-outfit text-secondary/40 text-xs tracking-widest uppercase">
                {label}
              </span>
              <span className="font-outfit text-secondary font-medium text-sm group-hover:text-secondary transition-colors">
                {value}
              </span>
              <span className="font-outfit text-secondary/40 text-xs">
                {description} →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
