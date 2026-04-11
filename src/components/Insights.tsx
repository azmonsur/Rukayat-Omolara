import React from "react";

const Insights = () => {
  const articles = [
    {
      tag: "Public Sector",
      title: "Navigating Regulatory Compliance in 2026",
      desc: "Key updates on treasury management and state-level financial transparency.",
    },
    {
      tag: "Audit Prep",
      title: "Streamlining Reporting Workflows",
      desc: "Addressing emerging challenges in collaborative stakeholder reporting.",
    },
  ];

  return (
    <section
      id="insights"
      className="px-6 md:px-12 py-24 bg-white border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side: Sticky Header (Matches Experience) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C93D33] block mb-4">
                Thought Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight font-black text-slate-900">
                Financial <br />
                <span className="text-red-500">Insights</span>
                <span className="text-slate-300">.</span>
              </h2>
              <p className="mt-8 text-sm text-slate-400 leading-relaxed max-w-xs">
                Perspectives on public finance, treasury management, and
                institutional accountability.
              </p>
            </div>
          </div>

          {/* Right Side: Article List */}
          <div className="lg:w-2/3 space-y-12">
            {articles.map((article, i) => (
              <div
                key={i}
                className="group border-t border-slate-100 pt-12 cursor-pointer"
              >
                <span className="text-[10px] text-[#C93D33] font-black uppercase tracking-[0.2em]">
                  {article.tag}
                </span>

                {/* Title using Experience-style hover shift */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {article.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-8">
                  {article.desc}
                </p>

                {/* Call to Action Line - Matches Work section */}
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-slate-300 group-hover:text-slate-900 transition-colors">
                  Read Article
                  <div className="w-4 h-[1px] bg-slate-200 group-hover:w-8 group-hover:bg-[#C93D33] transition-all" />
                </div>
              </div>
            ))}

            {/* View More Link */}
            <div className="pt-12">
              <button className="text-[10px] uppercase tracking-widest font-black text-slate-400 border-b border-slate-200 pb-2 hover:text-[#C93D33] hover:border-[#C93D33] transition-all duration-300">
                View all publications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
