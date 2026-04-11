import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32 bg-black text-white flex flex-col items-center text-center border-t border-white/5"
    >
      {/* Small Header Tag */}
      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C93D33] mb-8 block">
        Get in touch
      </span>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-serif mb-10 max-w-3xl leading-tight">
        Let’s discuss fiscal excellence and strategic management.
      </h2>

      {/* Bio Snippet */}
      <p className="text-white/40 max-w-md mb-16 text-sm leading-relaxed">
        Currently based in Lagos, supporting the State's financial goals through
        accountability, transparency, and meticulous reporting.
      </p>

      {/* Contact Links */}
      <div className="flex flex-col space-y-8 items-center">
        {/* Email */}
        <div className="group">
          <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">
            Email
          </span>
          <a
            href="mailto:ashirurukayat29@gmail.com"
            className="text-xl md:text-3xl font-light border-b border-white/10 pb-2 group-hover:border-[#C93D33] group-hover:text-[#C93D33] transition-all duration-500"
          >
            ashirukayat29@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="group pt-4">
          <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">
            Phone
          </span>
          <a
            href="tel:+2348125821162"
            className="text-xl md:text-3xl font-light border-b border-white/10 pb-2 group-hover:border-[#C93D33] group-hover:text-[#C93D33] transition-all duration-500"
          >
            +234 812 582 1162
          </a>
        </div>
      </div>

      {/* Footer Location Note */}
      <div className="mt-32">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          Lagos, Nigeria • Associate Chartered Accountant
        </p>
      </div>
    </section>
  );
};

export default Contact;
