import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Standard SVG paths to replace the missing Lucide icons
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Certifications", id: "certifications" },
    { name: "Professional Bio", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Financial Insights", id: "insights" },
    { name: "Contact", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
        {/* Brand */}
        <a href="#hero" onClick={() => setIsOpen(false)}>
          <div className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
            rukayat<span className="text-[#C93D33]">.</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-5 text-slate-400 items-center">
          <a
            href="https://x.com/Ladyfoyeke?s=20"
            target="_blank"
            className="hover:text-[#C93D33] transition-colors"
          >
            <XIcon />
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-[#C93D33] transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/olafoyeke/"
            target="_blank"
            className="hover:text-[#C93D33] transition-colors"
          >
            <LinkedinIcon />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-900 z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Transparent & Blurry */}
      <div
        className={`fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-12 justify-center items-center text-center">
          <div className="flex flex-col space-y-10">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={toggleMenu}
                className={`text-3xl font-serif text-slate-900 transition-all duration-700 delay-${index * 100} ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`mt-16 flex space-x-8 text-slate-600 transition-all duration-1000 delay-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="https://x.com/Ladyfoyeke?s=20"
              className="hover:text-[#C93D33]"
            >
              <XIcon />
            </a>
            <a href="#" className="hover:text-[#C93D33]">
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/olafoyeke/"
              className="hover:text-[#C93D33]"
            >
              <LinkedinIcon />
            </a>
          </div>

          <p
            className={`mt-10 text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold transition-all duration-1000 delay-700 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
