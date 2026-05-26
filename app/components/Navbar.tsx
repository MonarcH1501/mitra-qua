"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#proses", label: "Proses" },
  { href: "#harga", label: "Harga" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#ulasan", label: "Ulasan" },
  { href: "#pesan", label: "Pesan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (href: string) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "1rem 5%", display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all .4s",
        background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}>
        {/* Logo */}
        <div onClick={() => go("#home")} style={{ display: "flex", alignItems: "center", gap: ".6rem", cursor: "pointer" }}>
          {/* Drop icon */}
          <div style={{ width: 36, height: 36, position: "relative" }}>
            <svg viewBox="0 0 36 36" fill="none" width="36" height="36">
              <path d="M18 4 C18 4 8 16 8 22 a10 10 0 0 0 20 0 C28 16 18 4 18 4Z" fill="url(#dg)" />
              <defs>
                <linearGradient id="dg" x1="8" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38BDF8"/>
                  <stop offset="1" stopColor="#0369A1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--white)", letterSpacing: "-.03em" }}>
              mitra<span style={{ color: "var(--sky)" }}>qua</span>
            </span>
            <div style={{ fontSize: ".6rem", color: "rgba(240,249,255,.35)", letterSpacing: ".15em", textTransform: "uppercase", marginTop: "-2px" }}>Air Galon Isi Ulang</div>
          </div>
        </div>

        {/* Desktop */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }} className="hide-mob">
          {links.map(l => (
            <li key={l.href}>
              <button onClick={() => go(l.href)} style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(240,249,255,.45)", fontSize: ".85rem", fontWeight: 500,
                fontFamily: "Outfit, sans-serif", transition: "color .2s", padding: 0,
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--sky2)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,249,255,.45)")}
              >{l.label}</button>
            </li>
          ))}
        </ul>

        <button onClick={() => go("#pesan")} className="hide-mob" style={{
          background: "linear-gradient(135deg, var(--sky), var(--deep))",
          color: "#fff", border: "none", padding: ".6rem 1.5rem",
          borderRadius: 100, fontSize: ".85rem", fontWeight: 700,
          cursor: "pointer", fontFamily: "Outfit, sans-serif",
          boxShadow: "0 4px 16px rgba(14,165,233,.35)", transition: "all .2s",
        }}
          onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-1px)"); (e.currentTarget.style.boxShadow = "0 8px 24px rgba(14,165,233,.45)"); }}
          onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 4px 16px rgba(14,165,233,.35)"); }}
        >Pesan Sekarang 💧</button>

        <button onClick={() => setOpen(!open)} className="show-mob" style={{
          background: "none", border: "1px solid var(--border2)", cursor: "pointer",
          borderRadius: 8, padding: "8px", display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 20, height: 1.5, background: "var(--sky)", display: "block", borderRadius: 2 }} />)}
        </button>
      </nav>

      {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 250, backdropFilter: "blur(4px)" }} />}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: "80%", maxWidth: 280,
        background: "var(--ink2)", zIndex: 300, padding: "5rem 2rem 2rem",
        borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: ".5rem",
        transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .35s cubic-bezier(.4,0,.2,1)",
      }}>
        {links.map(l => (
          <button key={l.href} onClick={() => go(l.href)} style={{
            background: "none", border: "none", borderBottom: "1px solid var(--border)",
            padding: "1rem 0", textAlign: "left", cursor: "pointer",
            color: "rgba(240,249,255,.7)", fontSize: "1rem", fontWeight: 500, fontFamily: "Outfit, sans-serif",
          }}>{l.label}</button>
        ))}
        <button onClick={() => go("#pesan")} style={{
          background: "linear-gradient(135deg, var(--sky), var(--deep))", color: "#fff",
          border: "none", padding: ".85rem", borderRadius: 100, fontWeight: 700,
          cursor: "pointer", fontFamily: "Outfit, sans-serif", marginTop: "1rem",
        }}>Pesan Sekarang 💧</button>
      </div>
      <style>{`
        @media(max-width:768px){.hide-mob{display:none!important}}
        @media(min-width:769px){.show-mob{display:none!important}}
      `}</style>
    </>
  );
}
