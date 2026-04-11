import React from "react";

const Work = () => {
  const projects = [
    {
      title: "Treasury Management",
      tag: "Public Sector",
      desc: "Optimizing liquidity and fund allocation for state-wide financial operations.",
      color: "bg-[#FDE2E4]", // Matches the Hero pink
      link: "https://github.com/olafoyeke", // Replace with actual link
    },
    {
      title: "Loan Performance",
      tag: "Analysis",
      desc: "Comprehensive monitoring of loan portfolios to ensure fiscal compliance.",
      color: "bg-slate-50",
      link: "https://github.com/olafoyeke", // Replace with actual link
    },
    {
      title: "Financial Reporting",
      tag: "Transparency",
      desc: "Streamlining annual reporting workflows for Lagos State Government.",
      color: "bg-blue-50",
      link: "https://github.com/olafoyeke", // Replace with actual link
    },
  ];

  return (
    <section
      id="portfolio"
      className="px-6 md:px-12 py-24 bg-white border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Styled to match Experience and Certifications */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C93D33] block mb-4">
              Selected Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">
              Case Studies & <span className="text-red-500">Projects</span>
              <span className="text-slate-300">.</span>
            </h2>
          </div>
          <a
            href="https://github.com/olafoyeke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest font-black text-slate-400 border-b border-slate-200 pb-2 hover:text-[#C93D33] hover:border-[#C93D33] transition-all duration-300"
          >
            View full repository
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              {/* Visual Container */}
              <div
                className={`${p.color} aspect-[4/3] mb-8 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-3 relative overflow-hidden`}
              >
                {/* Abstract "Financial" Visual - Animated on hover */}
                <div className="w-full flex items-end justify-center space-x-1.5 h-16 mb-6">
                  <div className="w-2.5 bg-slate-300 h-1/2 group-hover:bg-[#C93D33] transition-all duration-500"></div>
                  <div className="w-2.5 bg-slate-300 h-full group-hover:bg-[#C93D33] transition-all duration-500 delay-75"></div>
                  <div className="w-2.5 bg-slate-300 h-2/3 group-hover:bg-[#C93D33] transition-all duration-500 delay-150"></div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                  {p.tag}
                </span>

                {/* External Link Icon (GitHub/Live Indicator) */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-[#C93D33]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Title & Description - Font-family aligned with Experience component */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#C93D33] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm mb-6">
                {p.desc}
              </p>

              {/* Call to Action Line */}
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-slate-300 group-hover:text-slate-900 transition-colors">
                Explore Case Study
                <div className="w-4 h-[1px] bg-slate-200 group-hover:w-8 group-hover:bg-[#C93D33] transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
