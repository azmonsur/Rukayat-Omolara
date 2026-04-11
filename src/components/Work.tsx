import React from "react";

const Work = () => {
  const projects = [
    {
      title: "Treasury Management",
      tag: "Public Sector",
      desc: "Optimizing liquidity and fund allocation for state-wide financial operations.",
      color: "bg-[#FDE2E4]", // Matching the Hero pink
    },
    {
      title: "Loan Performance",
      tag: "Analysis",
      desc: "Comprehensive monitoring of loan portfolios to ensure fiscal compliance.",
      color: "bg-slate-50",
    },
    {
      title: "Financial Reporting",
      tag: "Transparency",
      desc: "Streamlining annual reporting workflows for Lagos State Government.",
      color: "bg-blue-50",
    },
  ];

  return (
    <section id="portfolio" className="px-12 py-24 bg-white">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 block mb-4">
            Selected Expertise
          </span>
          <h2 className="text-5xl font-serif text-slate-900">
            Latest Work<span className="text-[#C93D33]">.</span>
          </h2>
        </div>
        <button className="text-[10px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
          View all case studies
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div
              className={`${p.color} aspect-[4/3] mb-6 flex flex-col items-center justify-center p-12 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2`}
            >
              {/* Abstract "Financial" Visual - Simple bar chart icon */}
              <div className="w-full flex items-end justify-center space-x-1 h-12 mb-4">
                <div className="w-2 bg-slate-300 h-1/2 group-hover:bg-[#C93D33] transition-colors"></div>
                <div className="w-2 bg-slate-300 h-full group-hover:bg-[#C93D33] transition-colors delay-75"></div>
                <div className="w-2 bg-slate-300 h-2/3 group-hover:bg-[#C93D33] transition-colors delay-150"></div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">
                {p.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
