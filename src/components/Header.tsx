/// <reference types="vite-plugin-svgr/client" />

import Logo from "../assets/logo.svg?react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-primary/90 backdrop-blur-sm border-b border-secondary/10">
      <Logo className="w-8 h-8 text-secondary" />
      <nav className="hidden md:flex items-center gap-8 text-sm font-outfit text-secondary/80">
        <a href="#about" className="hover:text-secondary transition-colors">About</a>
        <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-secondary transition-colors">Skills</a>
        <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
      </nav>
    </header>
  );
}
