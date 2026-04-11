import React from "react";

const Experience = () => {
  const history = [
    {
      year: "2019 — Present",
      role: "Senior Finance and Account Officer",
      company: "Lagos State Government",
      description:
        "Leading treasury management and loan performance monitoring. Spearheading financial reporting workflows to ensure state-wide transparency and ICAN compliance.",
      tags: ["Public Sector", "Treasury", "Compliance"],
    },
    {
      year: "2017 — 2019",
      role: "Finance & Account Officer",
      company: "Public Service Sector",
      description:
        "Managed internal audits and streamlined expenditure tracking. Developed critical reporting structures for emerging fiscal challenges.",
      tags: ["Audit", "Budgeting"],
    },
    {
      year: "2016",
      role: "Associate Chartered Accountant (ACA)",
      company: "ICAN",
      description:
        "Obtained professional certification, specializing in regulatory requirements and financial ethics.",
      tags: ["Certification", "ICAN"],
    },
  ];

  return (
    <section
      id="experience"
      className="px-12 py-24 bg-white border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Side: Sticky Header */}
          <div className="md:w-1/4">
            <div className="sticky top-32">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C93D33] block mb-4">
                Chronicle
              </span>
              <h2 className="text-4xl font-serif leading-tight">
                Professional History<span className="text-slate-300">.</span>
              </h2>
              <p className="mt-6 text-sm text-slate-400 leading-relaxed italic">
                A journey of seven years driving fiscal accountability in the
                public sector.
              </p>
            </div>
          </div>

          {/* Right Side: Timeline Ledger */}
          <div className="md:w-3/4 space-y-20">
            {history.map((job, i) => (
              <div
                key={i}
                className="group relative grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                {/* Year Column */}
                <div className="text-[10px] uppercase tracking-widest font-black text-slate-300 group-hover:text-[#C93D33] transition-colors duration-500">
                  {job.year}
                </div>

                {/* Details Column */}
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {job.role}
                  </h3>
                  <p className="text-[#C93D33] font-medium text-sm mb-4 uppercase tracking-tighter">
                    {job.company}
                  </p>
                  <p className="text-slate-500 leading-relaxed max-w-xl mb-6">
                    {job.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-3 py-1 border border-slate-100 text-slate-400 uppercase tracking-widest rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
