import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32 bg-black text-white flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Subtle Background Detail to match the 'Ledger' feel */}
      <div className="absolute left-1/2 top-0 w-[1px] h-24 bg-gradient-to-b from-[#C93D33] to-transparent opacity-50" />

      {/* Small Header Tag */}
      <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C93D33] mb-8 block">
        Direct Line
      </span>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 max-w-4xl leading-tight">
        Let’s discuss fiscal excellence and{" "}
        <span className="italic text-white/90">strategic management.</span>
      </h2>

      {/* Bio Snippet */}
      <p className="text-white/40 max-w-md mb-20 text-sm leading-relaxed font-medium">
        Currently based in Lagos, supporting the State's financial goals through
        accountability, transparency, and meticulous reporting.
      </p>

      {/* Contact Links */}
      <div className="flex flex-col space-y-12 items-center w-full">
        {/* Email */}
        <div className="group w-full max-w-md">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 block mb-4 font-bold">
            Correspondence
          </span>
          <a
            href="mailto:ashirurukayat29@gmail.com"
            className="text-xl md:text-3xl font-serif italic border-b border-white/10 pb-4 block group-hover:border-[#C93D33] group-hover:text-[#C93D33] transition-all duration-700 ease-out"
          >
            ashirukayat29@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="group w-full max-w-md">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 block mb-4 font-bold">
            Consultation
          </span>
          <a
            href="tel:+2348125821162"
            className="text-xl md:text-3xl font-serif italic border-b border-white/10 pb-4 block group-hover:border-[#C93D33] group-hover:text-[#C93D33] transition-all duration-700 ease-out"
          >
            +234 812 582 1162
          </a>
        </div>
      </div>

      {/* Footer Branding Note - Centered */}
      <div className="mt-32 pt-12 border-t border-white/5 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">
            Lagos, Nigeria • Associate Chartered Accountant
          </p>

          <div className="flex gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-white/20">
            <a
              href="https://linkedin.com/in/olafoyeke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C93D33] transition-colors"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#C93D33] transition-colors">
              CV 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
