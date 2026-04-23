import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6M5.25 9A7.5 7.5 0 1118.75 9H5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c-4.556 0-8.25-3.694-8.25-8.25S7.444 3.75 12 3.75s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" />
      </svg>
    ),
    title: "General Consultation",
    description: "Same-day virtual or in-person visits with experienced general practitioners.",
    tag: "Most Popular",
    color: "blue",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25V9l-5.25-5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.75V9h5.25M8.25 13.5h7.5M8.25 16.5h5.25" />
      </svg>
    ),
    title: "Specialist Care",
    description: "Cardiology, neurology, orthopedics & more from board-certified specialists.",
    tag: "Advanced",
    color: "violet",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.402 1.402c-1.232 1.232-.65 3.318 1.067 3.611A48.309 48.309 0 0012 21a48.309 48.309 0 008.135-1.587c1.717-.293 2.3-2.379 1.067-3.61L19.8 15.3M5 14.5h14.8" />
      </svg>
    ),
    title: "Laboratory Services",
    description: "Comprehensive diagnostics, blood work and imaging with rapid digital results.",
    tag: "Fast Results",
    color: "cyan",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Pharmacy & Medication",
    description: "Online prescriptions and home delivery from our certified pharmacy.",
    tag: "Home Delivery",
    color: "emerald",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Emergency Services",
    description: "Round-the-clock emergency care with rapid response and trauma teams.",
    tag: "24 / 7",
    color: "red",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Pediatrics",
    description: "Compassionate care for infants, children and teens by gentle pediatricians.",
    tag: "Family Care",
    color: "amber",
  },
];

const colorMap = {
  blue:    { icon: "bg-blue-50 text-blue-500 border-blue-100",       tag: "bg-blue-50 text-blue-600 border-blue-100",       hover: "hover:border-blue-200 hover:shadow-blue-100",    cta: "text-blue-500"    },
  violet:  { icon: "bg-violet-50 text-violet-500 border-violet-100", tag: "bg-violet-50 text-violet-600 border-violet-100", hover: "hover:border-violet-200 hover:shadow-violet-100",cta: "text-violet-500"  },
  cyan:    { icon: "bg-cyan-50 text-cyan-500 border-cyan-100",       tag: "bg-cyan-50 text-cyan-600 border-cyan-100",       hover: "hover:border-cyan-200 hover:shadow-cyan-100",    cta: "text-cyan-500"    },
  emerald: { icon: "bg-emerald-50 text-emerald-500 border-emerald-100", tag: "bg-emerald-50 text-emerald-600 border-emerald-100", hover: "hover:border-emerald-200 hover:shadow-emerald-100", cta: "text-emerald-500" },
  red:     { icon: "bg-red-50 text-red-500 border-red-100",          tag: "bg-red-50 text-red-600 border-red-100",          hover: "hover:border-red-200 hover:shadow-red-100",      cta: "text-red-500"     },
  amber:   { icon: "bg-amber-50 text-amber-500 border-amber-100",    tag: "bg-amber-50 text-amber-600 border-amber-100",    hover: "hover:border-amber-200 hover:shadow-amber-100",  cta: "text-amber-500"   },
};

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const c = colorMap[service.color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 90);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer
        flex flex-col gap-4 transition-all duration-500 ease-out
        hover:shadow-xl ${c.hover}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between">
        <div className={`
          w-12 h-12 rounded-xl border flex items-center justify-center
          transition-transform duration-300 ${c.icon}
          ${hovered ? "scale-110 -rotate-3" : "scale-100 rotate-0"}
        `}>
          {service.icon}
        </div>

        <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${c.tag}`}>
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Learn more — slides in on hover */}
      <div className={`
        flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 ${c.cta}
        ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
      `}>
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-1" : "translate-x-0"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
        </svg>
      </div>
    </div>
  );
}

function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-100 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 w-56 h-56 bg-emerald-100 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Our Services
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive care,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              all in one place
            </span>
          </h2>

          {/* Sub */}
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            From everyday checkups to specialized treatments, our digital-first hospital puts world-class healthcare at your fingertips.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-200" />
            <div className="w-2 h-2 rounded-full bg-blue-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-200" />
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-sm text-gray-400 mb-4">
            Trusted by <span className="font-semibold text-gray-600">50,000+</span> patients across 12 cities
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
            Explore all services
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;