const Insights = () => (
  <section id="insights" className="px-12 py-24 bg-white">
    <div className="mb-16">
      <h2 className="text-4xl font-serif mb-2">
        Financial Insights<span className="text-[#C93D33]">.</span>
      </h2>
      <p className="text-slate-400 text-xs uppercase tracking-widest">
        Thought leadership in public finance
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="border-t border-slate-100 pt-8 group cursor-pointer">
        <span className="text-[10px] text-[#C93D33] font-bold uppercase">
          Public Sector
        </span>
        <h3 className="text-xl font-bold mt-2 group-hover:underline">
          Navigating Regulatory Compliance in 2026
        </h3>
        <p className="text-slate-500 mt-4 text-sm">
          Key updates on treasury management and state-level financial
          transparency.
        </p>
      </div>
      <div className="border-t border-slate-100 pt-8 group cursor-pointer">
        <span className="text-[10px] text-[#C93D33] font-bold uppercase">
          Audit Prep
        </span>
        <h3 className="text-xl font-bold mt-2 group-hover:underline">
          Streamlining Reporting Workflows
        </h3>
        <p className="text-slate-500 mt-4 text-sm">
          Addressing emerging challenges in collaborative stakeholder reporting.
        </p>
      </div>
    </div>
  </section>
);

export default Insights;
