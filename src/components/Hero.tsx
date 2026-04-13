import React from "react";
import heroImg from "../assets/rukayat.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-12 pt10 pb-20 overflow-hidden min-h-[800px] flex items-center"
    >
      {/* The Signature Background Bar - Exact UI Match */}
      <div className="absolute top-0 left-[22%] w-[25%] h-[400px] bg-[#FDE2E4] -z-10" />

      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
        {/* Left Content Side */}
        <div className="md:w-1/2 z-10">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-8 block">
            HELLO THERE, NICE TO MEET YOU ❤️, I AM
          </span>

          <h1 className="text-[100px] md:text-[110px] font-serif leading-[0.85] text-[#C93D33] mb-8 font-black">
            rukayat <br />
            ashiru<span className="text-slate-300">.</span>
          </h1>

          <div className="space-y-6 max-w-lg">
            <p className="text-slate-700 font-semibold leading-relaxed">
              Chartered Accountant (ACA) & Senior Finance Officer at Lagos State
              Government.
            </p>

            <p className="text-slate-500 leading-relaxed text-sm">
              With over seven years of experience in the public sector, I
              specialize in treasury management and financial reporting. My
              mission is to drive excellence through transparency,
              accountability, and sustainable financial outcomes.
            </p>
          </div>

          <div className="mt-10">
            <a href="#contact">
              <button className="px-10 py-4 border border-slate-200 text-xs uppercase tracking-widest font-bold hover:bg-slate-900 hover:text-white transition-all duration-300">
                schedule a call
              </button>
            </a>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-end">
          <div className="relative w-[480px] h-[580px] group">
            <div className="absolute inset-0 bg-slate-100 -translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

            <div className="w-full h-full  bg-slate-200 overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Rukayat Omolara"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Sidebar Text - Updated colors for light background visibility */}
      <div className="hidden lg:flex absolute right-0 top-0 h-full w-16 flex-col justify-center items-center z-20 space-y-40">
        <a
          href="/ASHIRU_RUKAYAT_OLAFOYEKE_CV.pdf"
          download="Rukayat_Ashiru_CV.pdf"
          className="whitespace-nowrap text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-[#C93D33] transition-all duration-300 -rotate-90 origin-center"
        >
          download cv
        </a>
        <a
          href="#reviews"
          className="whitespace-nowrap text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-[#C93D33] transition-all duration-300 -rotate-90 origin-center"
        >
          client reviews
        </a>
        <a
          href="#process"
          className="whitespace-nowrap text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-[#C93D33] transition-all duration-300 -rotate-90 origin-center"
        >
          my process
        </a>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="lg:hidden absolute bottom-10 left-0 w-full flex justify-center space-x-8 px-6 z-20">
        <a
          href="/ASHIRU_RUKAYAT_OLAFOYEKE_CV.pdf"
          download="Rukayat_Ashiru_CV.pdf"
          className="text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1"
        >
          DOWNLOAD CV
        </a>
        <a
          href="#reviews"
          className="text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1"
        >
          Reviews
        </a>
        <a
          href="#process"
          className="text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1"
        >
          Process
        </a>
      </div>
    </section>
  );
};

export default Hero;
