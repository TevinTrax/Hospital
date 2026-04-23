import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Amara Osei",
    specialty: "Cardiologist",
    experience: "14 yrs exp",
    rating: 4.9,
    reviews: 312,
    patients: "2.1k+",
    available: true,
    tags: ["Heart Disease", "ECG", "Hypertension"],
    initials: "AO",
    accent: "from-indigo-500 to-blue-500",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 2,
    name: "Dr. Priya Nair",
    specialty: "Neurologist",
    experience: "11 yrs exp",
    rating: 4.8,
    reviews: 218,
    patients: "1.7k+",
    available: true,
    tags: ["Migraines", "Epilepsy", "MRI Analysis"],
    initials: "PN",
    accent: "from-violet-500 to-purple-500",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    id: 3,
    name: "Dr. James Kariuki",
    specialty: "Orthopedic Surgeon",
    experience: "18 yrs exp",
    rating: 4.9,
    reviews: 429,
    patients: "3.4k+",
    available: false,
    tags: ["Joint Replacement", "Sports Injuries", "Spine"],
    initials: "JK",
    accent: "from-sky-500 to-cyan-500",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    id: 4,
    name: "Dr. Sofia Mensah",
    specialty: "Dermatologist",
    experience: "9 yrs exp",
    rating: 4.7,
    reviews: 196,
    patients: "1.3k+",
    available: true,
    tags: ["Skin Cancer", "Acne", "Cosmetic Derm"],
    initials: "SM",
    accent: "from-rose-500 to-pink-500",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    id: 5,
    name: "Dr. Liam Odhiambo",
    specialty: "Pediatrician",
    experience: "12 yrs exp",
    rating: 4.9,
    reviews: 507,
    patients: "4.0k+",
    available: true,
    tags: ["Child Health", "Vaccinations", "Nutrition"],
    initials: "LO",
    accent: "from-emerald-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 6,
    name: "Dr. Hana Al-Rashid",
    specialty: "Psychiatrist",
    experience: "15 yrs exp",
    rating: 4.8,
    reviews: 284,
    patients: "2.6k+",
    available: false,
    tags: ["Anxiety", "Depression", "CBT"],
    initials: "HR",
    accent: "from-amber-500 to-orange-500",
    badge: "bg-amber-100 text-amber-700",
  },
];

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

function DoctorCard({ doctor, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        group relative bg-white rounded-2xl border border-slate-100
        shadow-sm hover:shadow-xl
        transition-all duration-500 ease-out overflow-hidden
        cursor-pointer
        ${hovered ? "-translate-y-2" : "translate-y-0"}
      `}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeSlideUp 0.6s ease-out forwards",
        opacity: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${doctor.accent}`} />

      {/* Subtle background glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/60 group-hover:to-blue-50/40 transition-all duration-500 pointer-events-none`}
      />

      <div className="p-6 relative z-10">
        {/* Header: Avatar + availability badge */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${doctor.accent} flex items-center justify-center shadow-md flex-shrink-0`}>
              <span className="text-white font-bold text-base tracking-wide">{doctor.initials}</span>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <CheckIcon />
                </div>
              </div>
            </div>
            {/* Name + specialty */}
            <div>
              <h3 className="font-semibold text-slate-800 text-base leading-snug">{doctor.name}</h3>
              <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${doctor.badge}`}>
                {doctor.specialty}
              </span>
            </div>
          </div>

          {/* Availability pill */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${
            doctor.available
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-slate-50 text-slate-500 border-slate-200"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`} />
            {doctor.available ? "Available" : "Booked"}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { label: "Rating", value: doctor.rating, icon: <StarIcon /> },
            { label: "Reviews", value: doctor.reviews, icon: null },
            { label: "Patients", value: doctor.patients, icon: null },
          ].map(({ label, value, icon }) => (
            <div key={label} className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-white group-hover:border group-hover:border-slate-100 transition-all duration-300">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                {icon}
                <span className="text-sm font-bold text-slate-800">{value}</span>
              </div>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Experience + patients */}
        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <span>{doctor.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <UsersIcon />
            <span>{doctor.patients} patients</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {doctor.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`
            w-full py-2.5 px-4 rounded-xl text-sm font-semibold
            transition-all duration-300
            ${doctor.available
              ? `bg-gradient-to-r ${doctor.accent} text-white hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]`
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }
          `}
          disabled={!doctor.available}
        >
          {doctor.available ? "Book Appointment" : "Join Waitlist"}
        </button>
      </div>
    </div>
  );
}

function Doctors() {
  const [filter, setFilter] = useState("All");
  const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Dermatology"];

  const filteredDoctors =
    filter === "All"
      ? doctors
      : doctors.filter((d) => d.specialty.toLowerCase().includes(filter.toLowerCase().replace("ology", "olog")));

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 min-h-screen">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-14">
          {/* ── Header ── */}
          <div className="text-center mb-12" style={{ animation: "fadeIn 0.7s ease-out forwards" }}>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-indigo-200 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo-700">Meet Our Experts</span>
            </div>

            <h2 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Top doctors,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                trusted care
              </span>
            </h2>
            <p className="max-w-lg mx-auto text-lg text-slate-500 leading-relaxed">
              Hand-picked, board-certified specialists committed to delivering compassionate, evidence-based care.
            </p>
          </div>

          {/* ── Filter Pills ── */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === s
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                    : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ── Doctor Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-14 text-center">
            <div className="inline-block bg-white border border-slate-200 rounded-2xl px-8 py-6 shadow-sm">
              <p className="text-slate-600 mb-3 text-sm">Can't find the right specialist?</p>
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                Browse All Doctors
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;