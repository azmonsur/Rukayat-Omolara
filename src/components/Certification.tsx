import React from "react";

const certifications = [
  {
    id: 1,
    title: "Associate Chartered Accountant",
    issuer: "Institute of Chartered Accountants of Nigeria (ICAN) Platform",
    date: "May 2024",
    skills: ["Operations Management", "Financial Reporting", "+16 skills"],
    isPrimary: true,
  },
  {
    id: 2,
    title: "Financial Statements Mastery and Preparation",
    issuer: "Dalot&Associates",
    date: "Mar 2024",
    skills: ["Financial Reporting", "Financial Analysis", "+3 skills"],
  },
  {
    id: 3,
    title: "Introduction to financial management",
    issuer: "Great Learning Academy",
    date: "Jan 2023",
    skills: ["Operations Management", "Financial Analysis", "+4 skills"],
  },
  {
    id: 4,
    title: "Associate Accounting Technician",
    issuer: "The Institute of Chartered Accountants of Nigeria",
    date: "Dec 2018",
    skills: ["Operations Management", "Financial Reporting", "+18 skills"],
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-white px-6 md:px-12 border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Format matched to Experience Sidebar style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#C93D33] block mb-4">
              Validation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">
              Licenses & <span className="text-red-500">Certifications.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-[#C93D33] pl-4">
              Verified credentials across public sector <br />
              finance and treasury management.
            </p>
          </div>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white border border-slate-100 p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between"
            >
              {/* Subtle hover accent - Left line */}
              <div className="absolute left-0 top-0 h-full w-0 bg-[#C93D33] group-hover:w-1 transition-all duration-300" />

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C93D33] text-[10px] uppercase tracking-[0.2em] font-black">
                    {cert.issuer}
                  </span>
                  {cert.isPrimary && (
                    <span className="bg-[#C93D33]/10 text-[#C93D33] text-[8px] uppercase font-black px-2 py-0.5 rounded-sm">
                      Primary
                    </span>
                  )}
                </div>

                {/* Title using same hover shift as Experience */}
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {cert.title}
                </h3>

                {/* Skills Tags - Exact match to Experience tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-3 py-1 bg-slate-50 text-slate-400 uppercase tracking-widest font-bold rounded-sm border border-slate-100 group-hover:bg-white group-hover:text-slate-600 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date Section - Serif & Italic formatting */}
              <div className="mt-8 md:mt-0 md:pl-12 flex flex-col items-start md:items-end border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300 mb-1">
                  Issued
                </span>
                <span className="text-xl font-serif italic font-black text-slate-900 group-hover:text-[#C93D33] transition-colors">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Link Footer */}
        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/olafoyeke/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-slate-900 transition-colors group"
          >
            Verify full record on LinkedIn
            <div className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-[#C93D33] transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
