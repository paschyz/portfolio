/// <reference types="vite-plugin-svgr/client" />

import Logo from "../assets/logo.svg?react";

export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16 lg:px-24 bg-tertiary border-t border-secondary/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo className="w-6 h-6 text-secondary/40" />
        <p className="font-outfit text-secondary/30 text-xs">
          © {new Date().getFullYear()} Pascal Zhou. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
