const About = () => (
  <section id="about" className="px-12 py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
      <div className="md:w-1/3">
        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#C93D33]">
          Mission
        </h2>
      </div>
      <div className="md:w-2/3">
        <p className="text-3xl font-serif italic text-slate-800 leading-snug mb-8">
          "Driving excellence in financial management by leveraging critical
          thinking and a deep understanding of regulatory requirements."
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          As an Associate Chartered Accountant (ICAN) with over seven years in
          the public sector, I serve as a Senior Finance and Account Officer at
          Lagos State Government. My focus is on treasury management and loan
          performance monitoring, ensuring that every financial process meets
          the highest standards of transparency.
        </p>
      </div>
    </div>
  </section>
);

export default About;
