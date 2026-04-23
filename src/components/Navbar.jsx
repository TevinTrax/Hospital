import { useState, useEffect } from "react";
import { FaHospital } from "react-icons/fa";

const navLinks = ["Home", "Services", "Doctors", "Appointments", "Pharmacy", "Contact"];

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 30);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Sora:wght@600;700&display=swap');

        /* ── Nav wrapper ── */
        .manilla-nav {
          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
        }

        /* ── Glass bar ── */
        .nav-glass {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(20px) saturate(190%);
          -webkit-backdrop-filter: blur(20px) saturate(190%);
          border-bottom: 1px solid rgba(186, 215, 255, 0.5);
          box-shadow:
            0 1px 0 rgba(186, 215, 255, 0.25),
            0 4px 28px rgba(59, 130, 246, 0.05);
          transition:
            background  0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow  0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-glass.scrolled {
          background: rgba(255, 255, 255, 0.97);
          box-shadow:
            0 1px 0 rgba(186, 215, 255, 0.45),
            0 6px 36px rgba(59, 130, 246, 0.09);
        }

        /* ── Inner row ── */
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition:
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity   0.45s ease;
        }

        /* ── Logo ── */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity   0.4s ease;
        }
        .logo-icon-wrap { position: relative; flex-shrink: 0; }
        .logo-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(59, 130, 246, 0.30);
          transition:
            transform  0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.28s ease;
        }
        .logo-wrap:hover .logo-icon {
          transform: rotate(-7deg) scale(1.12);
          box-shadow:
            0 8px 22px rgba(59, 130, 246, 0.38),
            0 0 0 5px rgba(59, 130, 246, 0.10);
        }
        .logo-text {
          font-family: 'Sora', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.5px;
          user-select: none;
        }
        .logo-text-accent { color: #2563eb; }

        /* Pulsing live dot */
        .live-dot {
          position: absolute;
          top: -2px; right: -2px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 2px #fff;
          animation: livePulse 2.4s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%, 100% { box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(34,197,94,0.0); }
          50%       { box-shadow: 0 0 0 2px #fff, 0 0 0 6px rgba(34,197,94,0.25); }
        }

        /* ── Nav links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0; padding: 0;
        }

        /* Staggered entrance */
        .nav-link-item {
          opacity: 0;
          transform: translateY(-10px);
          animation: slideDown 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .nav-link-item:nth-child(1) { animation-delay: 0.10s; }
        .nav-link-item:nth-child(2) { animation-delay: 0.15s; }
        .nav-link-item:nth-child(3) { animation-delay: 0.20s; }
        .nav-link-item:nth-child(4) { animation-delay: 0.25s; }
        .nav-link-item:nth-child(5) { animation-delay: 0.30s; }
        .nav-link-item:nth-child(6) { animation-delay: 0.35s; }

        @keyframes slideDown {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Link button */
        .nav-link-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          padding: 7px 14px;
          border-radius: 9px;
          cursor: pointer;
          letter-spacing: -0.1px;
          outline: none;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.2s ease;
        }
        .nav-link-btn:hover  { color: #1e40af; }
        .nav-link-btn.active { color: #1d4ed8; font-weight: 600; }

        /* Hover fill pill */
        .link-bg {
          position: absolute;
          inset: 0;
          border-radius: 9px;
          background: rgba(59, 130, 246, 0.08);
          transform: scale(0.8);
          opacity: 0;
          transition:
            transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity   0.18s ease;
          z-index: -1;
          pointer-events: none;
        }
        .nav-link-btn:hover .link-bg { transform: scale(1); opacity: 1; }

        /* Label */
        .link-label { position: relative; z-index: 1; }

        /* Spring underline */
        .link-underline {
          position: absolute;
          bottom: 3px;
          left: 14px; right: 14px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.30s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }
        .nav-link-btn.active .link-underline,
        .nav-link-btn:hover  .link-underline { transform: scaleX(1); }

        /* ── CTA area ── */
        .cta-area {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cta-area > * {
          opacity: 0;
          transform: translateY(-10px);
          animation: slideDown 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cta-area > *:nth-child(1) { animation-delay: 0.40s; }
        .cta-area > *:nth-child(2) { animation-delay: 0.47s; }

        /* Ghost Login button */
        .btn-login {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          background: none;
          border: none;
          padding: 8px 16px;
          border-radius: 9px;
          cursor: pointer;
          letter-spacing: -0.1px;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .btn-login::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9px;
          background: #f1f5f9;
          transform: scale(0.75);
          opacity: 0;
          transition:
            transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity   0.18s ease;
          z-index: -1;
        }
        .btn-login:hover { color: #1d4ed8; }
        .btn-login:hover::after { transform: scale(1); opacity: 1; }
        .btn-login:active { transform: scale(0.96); }

        /* Primary Register button */
        .btn-register {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 55%, #60a5fa 100%);
          border: none;
          padding: 9px 20px;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: -0.1px;
          overflow: hidden;
          isolation: isolate;
          box-shadow:
            0 2px 12px rgba(59, 130, 246, 0.32),
            inset 0 1px 0 rgba(255,255,255,0.20);
          transition:
            transform  0.24s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.24s ease;
        }
        /* Gloss sheen */
        .btn-register::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: linear-gradient(160deg, rgba(255,255,255,0.22) 0%, transparent 55%);
          pointer-events: none;
        }
        /* Shimmer sweep */
        .btn-register::after {
          content: '';
          position: absolute;
          top: -60%; left: -90%;
          width: 55%; height: 220%;
          background: linear-gradient(
            105deg,
            transparent              20%,
            rgba(255,255,255,0.38)   50%,
            transparent              80%
          );
          transform: skewX(-18deg);
          transition: left 0.55s ease;
          pointer-events: none;
        }
        .btn-register:hover::after { left: 140%; }
        .btn-register:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow:
            0 8px 26px rgba(59, 130, 246, 0.42),
            0 0 0 4px rgba(59, 130, 246, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }
        .btn-register:active {
          transform: translateY(0) scale(0.97);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.28);
        }

        /* ── Demo page body ── */
        .demo-body {
          padding: 40px 32px;
          font-family: 'DM Sans', sans-serif;
          color: #94a3b8;
          font-size: 13px;
        }
      `}</style>

      <nav className="manilla-nav">
        <div className={`nav-glass${scrolled ? " scrolled" : ""}`}>
          <div
            className="nav-inner"
            style={{
              transform: mounted ? "translateY(0)"  : "translateY(-20px)",
              opacity:   mounted ? 1                : 0,
            }}
          >

            {/* Logo */}
            <div
              className="logo-wrap"
              style={{
                transform:       mounted ? "translateX(0)"  : "translateX(-16px)",
                opacity:         mounted ? 1                : 0,
                transitionDelay: "0.05s",
              }}
            >
              <div className="logo-icon-wrap">
                <div className="logo-icon">
                  <FaHospital size={18} color="#fff" />
                </div>
                <span className="live-dot" />
              </div>
              <span className="logo-text">
                Manil<span className="logo-text-accent">la</span>
              </span>
            </div>

            {/* Nav links */}
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link} className="nav-link-item">
                  <button
                    className={`nav-link-btn${activeLink === link ? " active" : ""}`}
                    onClick={() => setActiveLink(link)}
                  >
                    <span className="link-bg" />
                    <span className="link-label">{link}</span>
                    <span className="link-underline" />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="cta-area">
              <button className="btn-login">Login</button>
              <button className="btn-register">Register</button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;