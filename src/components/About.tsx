import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side: Section Label (Matches Experience/Insights style) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C93D33] block mb-4">
                Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight font-black text-slate-900">
                Mission & <br />
                <span className="text-red-500">Aproach</span>
                <span className="text-slate-300">.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:w-2/3 relative">
            {/* Subtle Vertical Accent */}
            <div className="absolute left-0 -left-6 top-2 bottom-2 w-[1px] bg-slate-200 hidden lg:block" />

            <div className="max-w-2xl">
              <p className="text-3xl md:text-4xl font-serif italic text-slate-900 leading-tight mb-12">
                "Driving excellence in financial management by leveraging{" "}
                <span className="text-[#C93D33] not-italic font-black">
                  critical thinking
                </span>{" "}
                and a deep understanding of regulatory requirements."
              </p>

              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>
                  As an{" "}
                  <span className="text-slate-900 font-bold">
                    Associate Chartered Accountant (ACA)
                  </span>{" "}
                  with over seven years in the public sector, I currently serve
                  as a Senior Finance and Account Officer at the Lagos State
                  Government.
                </p>
                <p>
                  My core focus lies in the precision of treasury management and
                  the rigorous monitoring of loan performance. I am dedicated to
                  ensuring that institutional financial processes don't just
                  function, but meet the highest international standards of
                  transparency and fiscal accountability.
                </p>
              </div>

              {/* Signature Style Footer Link */}
              {/* <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">
                  Treasury Specialist
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C93D33]" />
                  ICAN Certified
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
