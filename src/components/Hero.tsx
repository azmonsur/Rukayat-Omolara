import React from "react";
import heroImg from "../assets/rukayat.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-12 pt-10 pb-20 overflow-hidden min-h-[800px] flex items-center"
    >
      {/* The Signature Background Bar - Exact UI Match */}
      {/* This is the pink bar that drops from the top and sits behind the name */}
      <div className="absolute top-0 left-[22%] w-[25%] h-[400px] bg-[#FDE2E4] -z-10" />

      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
        {/* Left Content Side */}
        <div className="md:w-1/2 z-10">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-8 block">
            HELLO THERE, NICE TO MEET YOU ❤️, I AM
          </span>

          <h1 className="text-[100px] md:text-[120px] font-serif leading-[0.85] text-[#C93D33] mb-8 font-black">
            rukayat<span className="text-slate-900">.</span>
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
          {/* Main Image Container */}
          <div className="relative w-[480px] h-[580px] group">
            {/* The white border/frame effect behind the image if you want more UI depth */}
            <div className="absolute inset-0 bg-slate-100 -translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

            <div className="w-full h-full bg-slate-200 overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Rukayat Omolara"
                className="object-cover w-full h-full  hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Sidebar Text - Exact UI Alignment */}
      <div className="absolute right-8 bottom-32 flex flex-col space-y-16 items-center">
        <span className="rotate-90 origin-right whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
          download cv
        </span>
        <span className="rotate-90 origin-right whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
          client reviews
        </span>
        <span className="rotate-90 origin-right whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
          my process
        </span>
      </div>
    </section>
  );
};

export default Hero;
