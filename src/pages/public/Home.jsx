import { FaCalendarAlt, FaHeartbeat, FaFlask, FaPills, FaUserMd, FaCheckCircle, FaBell, FaChartLine, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

/* ─── Google Fonts: Sora (display) + Plus Jakarta Sans (body) ─── */
const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
);

/* ─── Data ─── */
const INIT_BARS = [55, 72, 40, 88, 62, 79, 50, 85, 68, 90, 58, 76];
const DAYS      = ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F"];

const APPTS = [
  { init: "AK", grad: "from-indigo-500 to-violet-500", name: "Alice Kamau",     type: "Cardiology Consult", time: "09:00 AM", dot: "bg-emerald-400" },
  { init: "JO", grad: "from-sky-400 to-cyan-500",      name: "James Odhiambo", type: "General Check-up",   time: "10:30 AM", dot: "bg-emerald-400" },
  { init: "FM", grad: "from-rose-400 to-pink-500",     name: "Fatuma Mwangi",  type: "Radiology Scan",     time: "12:00 PM", dot: "bg-amber-400"  },
];

const QUICK = [
  { icon: <FaUserMd      size={14} />, val: "48",  label: "Doctors Online",   bg: "bg-indigo-50", iconBg: "bg-indigo-100 text-indigo-600" },
  { icon: <FaCalendarAlt size={14} />, val: "124", label: "Today's Appts",    bg: "bg-sky-50",    iconBg: "bg-sky-100 text-sky-600"       },
  { icon: <FaFlask       size={14} />, val: "37",  label: "Lab Results Ready",bg: "bg-teal-50",   iconBg: "bg-teal-100 text-teal-600"     },
  { icon: <FaPills       size={14} />, val: "89",  label: "Prescriptions",    bg: "bg-rose-50",   iconBg: "bg-rose-100 text-rose-500"     },
];

const FEATURES = [
  { icon: <FaShieldAlt size={10} />, text: "HIPAA Compliant"        },
  { icon: <FaHeartbeat size={10} />, text: "Real-time Monitoring"   },
  { icon: <FaFlask     size={10} />, text: "Instant Lab Results"    },
];

const STATUS_PILLS = [
  { text: "Systems Online",  cls: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-400" },
  { text: "Lab Active",      cls: "bg-sky-50 text-sky-700 border-sky-200",             dot: "bg-sky-400"     },
  { text: "ICU: 2 Beds Left",cls: "bg-amber-50 text-amber-700 border-amber-200",       dot: "bg-amber-400"   },
  { text: "ER Ready",        cls: "bg-rose-50 text-rose-600 border-rose-200",           dot: "bg-rose-400"    },
];

/* ─────────────────────────────────────────────────── */
function Home() {
  const [bars,      setBars]      = useState(INIT_BARS);
  const [activeBar, setActiveBar] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setBars(INIT_BARS.map(() => Math.floor(Math.random() * 55) + 30));
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <FontLink />

      {/* ════════ PAGE WRAPPER ════════ */}
      <section
        className="pt-16 w-full min-h-screen relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#eef2ff 0%,#f0f9ff 50%,#ecfdf5 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* decorative glow blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-70"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)", transform: "translate(35%,-35%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-60"
          style={{ background: "radial-gradient(circle,rgba(14,165,233,0.13) 0%,transparent 70%)", transform: "translate(-35%,35%)" }}
        />

        {/* ════════ MAIN GRID ════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-6 py-6 relative z-10">

          {/* ─── LEFT: HERO ─── */}
          <div className="flex flex-col justify-center p-4">

            {/* live badge */}
            <div className="inline-flex items-center gap-2 self-start mb-4 bg-white border border-indigo-100 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
                Manilla Hospital · Digital Health Platform
              </span>
            </div>

            {/* heading */}
            <h1
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Your Health,{" "}
              <span
                style={{
                  background: "linear-gradient(120deg,#4f46e5 0%,#0ea5e9 60%,#10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Priority.
              </span>
            </h1>

            {/* subtext */}
            <p className="text-slate-500 text-base leading-relaxed max-w-md mb-3 font-medium">
              Experience fast, digital, and reliable healthcare. Book consultations,
              access lab results, manage prescriptions, and connect with top specialists —
              all in one premium platform.
            </p>

            {/* feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FEATURES.map(f => (
                <span
                  key={f.text}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
                >
                  <span className="text-indigo-500">{f.icon}</span>
                  {f.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 mb-10">
              <button
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg,#4f46e5 0%,#0ea5e9 100%)", boxShadow: "0 4px 20px rgba(79,70,229,0.35)" }}
              >
                <FaCalendarAlt size={14} />
                Book Appointment
              </button>
              <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold px-6 py-3 rounded-xl cursor-pointer transition-all duration-150 hover:scale-105 hover:border-indigo-400 hover:shadow-md active:scale-95">
                Get Started <FaArrowRight size={11} />
              </button>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { num: "500+", label: "Specialists"     },
                { num: "24/7", label: "Emergency Care"  },
                { num: "10k+", label: "Patients Served" },
              ].map(s => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-4 text-center border border-indigo-50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
                >
                  <p
                    className="text-2xl font-extrabold mb-0.5 leading-none"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      background: "linear-gradient(135deg,#4f46e5,#0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: DASHBOARD PREVIEW ─── */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col bg-white"
            style={{ boxShadow: "0 12px 48px rgba(79,70,229,0.14),0 2px 8px rgba(0,0,0,0.05)", border: "1px solid #e0e7ff" }}
          >
            {/* topbar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ background: "linear-gradient(135deg,#4f46e5 0%,#0ea5e9 100%)" }}
            >
              <div className="flex gap-1.5">
                {["bg-red-400", "bg-amber-400", "bg-emerald-400"].map(c => (
                  <span key={c} className={`w-3 h-3 rounded-full ${c} opacity-80`} />
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-wide" style={{ fontFamily: "'Sora',sans-serif" }}>
                🏥 Manilla — Live Dashboard
              </span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Live
                </span>
                <FaBell size={13} color="rgba(255,255,255,0.85)" />
              </div>
            </div>

            {/* dashboard body */}
            <div className="flex-1 p-5 space-y-4">

              {/* notification banner */}
              <div className="flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" size={14} />
                <span className="text-xs font-bold text-emerald-800">
                  3 appointments confirmed today · Next: Alice Kamau at 09:00
                </span>
              </div>

              {/* quick stat 2×2 grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {QUICK.map(q => (
                  <div key={q.label} className={`flex items-center gap-3 ${q.bg} rounded-xl p-3`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${q.iconBg}`}>
                      {q.icon}
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-slate-800 leading-none" style={{ fontFamily: "'Sora',sans-serif" }}>
                        {q.val}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{q.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* appointments list */}
              <div>
                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">
                  Upcoming Appointments
                </p>
                <div className="space-y-2">
                  {APPTS.map(a => (
                    <div
                      key={a.name}
                      className="flex items-center gap-3 bg-slate-50 hover:bg-indigo-50 rounded-xl px-3 py-2.5 border border-slate-100 hover:border-indigo-200 transition-all duration-150 cursor-default"
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${a.grad} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {a.init}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-800 truncate">{a.name}</p>
                        <p className="text-xs text-slate-400 truncate">{a.type}</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                        {a.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* animated bar chart */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-400 tracking-widest uppercase flex items-center gap-1.5">
                    <FaChartLine size={10} className="text-indigo-400" />
                    Weekly Patient Visits
                  </p>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    +12% ↑
                  </span>
                </div>
                <div
                  className="flex items-end gap-1 bg-slate-50 rounded-xl px-3 pt-3 pb-2 border border-slate-100"
                  style={{ height: "76px" }}
                >
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                      <div
                        className="w-full rounded-t cursor-pointer transition-all duration-700 ease-in-out"
                        style={{
                          height: `${h * 0.44}px`,
                          background: activeBar === i
                            ? "linear-gradient(180deg,#10b981,#0ea5e9)"
                            : "linear-gradient(180deg,#a5b4fc,#4f46e5)",
                          opacity: activeBar === null || activeBar === i ? 1 : 0.4,
                        }}
                        onMouseEnter={() => setActiveBar(i)}
                        onMouseLeave={() => setActiveBar(null)}
                      />
                      <span className="text-slate-400 leading-none select-none" style={{ fontSize: "7px" }}>
                        {DAYS[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* status pills */}
              <div className="flex flex-wrap gap-2">
                {STATUS_PILLS.map(p => (
                  <span
                    key={p.text}
                    className={`inline-flex items-center gap-1.5 border rounded-full px-2.5 py-1 text-xs font-bold ${p.cls}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                    {p.text}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;