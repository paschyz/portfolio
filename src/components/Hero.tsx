/// <reference types="vite-plugin-svgr/client" />

import Hexagon from "../assets/hexagon.svg?react";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          <p className="font-outfit text-secondary/60 text-sm tracking-widest uppercase">
            Web Developer
          </p>
          <h1 className="font-schabo text-7xl md:text-8xl lg:text-9xl text-secondary leading-none">
            Pascal<br />Zhou
          </h1>
          <p className="font-outfit text-secondary/70 text-lg">
            Building modern web experiences from Paris, France.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-primary font-outfit font-semibold text-sm rounded-full hover:bg-secondary/90 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-secondary/40 text-secondary font-outfit text-sm rounded-full hover:border-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Avatar with hexagon decoration */}
        <div className="relative flex items-center justify-center h-80">
          <Hexagon className="absolute w-72 h-72 text-tertiary opacity-30" />
          <Hexagon className="absolute w-80 h-80 text-secondary opacity-10 rotate-12" />
          <img
            src={avatar}
            alt="Pascal Zhou"
            className="relative z-10 w-56 h-56 object-cover rounded-full border-4 border-secondary/20"
          />
        </div>

      </div>
    </section>
  );
}
