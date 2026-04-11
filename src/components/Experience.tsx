import React from "react";

const Experience = () => {
  const history = [
    {
      year: "2024 - Present",
      role: "Senior Finance and Account Officer",
      company: "Lagos State Government",
      description: [
        "Facilitate the Negotiation of debt finance options for the State, ensuring favourable terms and conditions.",
        "Monitor the Disbursement and Performance of the debt instrument to ensure compliance with agreed timelines and terms.",
        "Ensure proper documentation for accountability and transparency.",
        "Review of instrument pricing in line with the State’s approved rate.",
        "Maintain Relationship with Stakeholders to streamline loan processing workflow.",
      ],
      tags: ["Public Sector", "Treasury", "Compliance"],
    },
    {
      year: "2019 - 2024",
      role: "Finance & Account Officer",
      company: "Lagos State Government",
      description: [
        "Daily recording of Account Receivable and Payable into Oracle Application.",
        "Preparation of Monthly Report on Oracle Application and Bank Reconciliation statements.",
        "Generation of Regulatory Bill to Clients and Monthly Revenue Returns.",
      ],
      tags: [
        "Oracle ERP",
        "Financial Accounting",
        "General Ledgers",
        "Reporting",
      ],
    },
    {
      year: "2017 - 2019",
      role: "Assistant Executive Officer",
      company: "Lagos State Government",
      description: [
        "Preparation of payment vouchers and recording transactions into the Cashbook.",
        "Recording and updating of the votebook to ensure budgetary control.",
        "Execution of Check and Balancing procedures for bank reconciliation.",
      ],
      tags: ["Bank Reconciliation", "General Accounts", "Budgeting"],
    },
    {
      year: "2015 - 2016",
      role: "Account and Audit Intern",
      company: "Lagos State Government",
      description: [
        "Pre-audit of payment vouchers and scheduling to audit departments.",
        "Preparation and updating of Cash book and voucher balancing.",
      ],
      tags: ["Internal Audit", "Accounts Payable", "Problem Solving"],
    },
  ];

  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-24 bg-white border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C93D33] block mb-4">
                Chronicle
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">
                Professional <br />
                <span className="text-red-500">History</span>
                <span className="text-slate-300">.</span>
              </h2>
              <p className="mt-8 text-sm text-slate-400 leading-relaxed max-w-xs">
                A journey of over seven years driving fiscal accountability and
                treasury excellence in the public sector.
              </p>
            </div>
          </div>

          {/* Right Side: Timeline Ledger */}
          <div className="lg:w-2/3 relative">
            {/* Vertical Line Connector */}
            <div className="absolute left-0 md:left-32 top-2 bottom-2 w-[1px] bg-dashed bg-slate-100 hidden md:block" />

            <div className="space-y-20">
              {history.map((job, i) => (
                <div
                  key={i}
                  className="group relative grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                  {/* Year Column */}
                  <div className="md:col-span-1">
                    <div className="sticky top-40">
                      <span className="text-[10px] uppercase tracking-widest font-black text-slate-300 group-hover:text-[#C93D33] transition-colors duration-500">
                        {job.year}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="md:col-span-3 border-l md:border-l-0 border-slate-100 pl-6 md:pl-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:translate-x-2 transition-transform duration-500">
                      {job.role}
                    </h3>
                    <p className="text-[#C93D33] font-bold text-[11px] mb-6 uppercase tracking-widest">
                      {job.company}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {job.description.map((line, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0 group-hover:bg-[#C93D33] transition-colors" />
                          {line}
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-3 py-1 bg-slate-50 text-slate-400 uppercase tracking-widest font-bold rounded-sm border border-slate-100 group-hover:bg-white group-hover:text-slate-600 transition-all"
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
      </div>
    </section>
  );
};

export default Experience;
