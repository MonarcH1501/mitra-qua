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
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(99,88,229,.07), 0 8px 32px rgba(99,88,229,.07)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}>
        <div onClick={() => go("#home")} style={{ display: "flex", alignItems: "center", gap: ".65rem", cursor: "pointer" }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(99,88,229,.3)" }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M12 2C12 2 5 10 5 14.5a7 7 0 0014 0C19 10 12 2 12 2Z" fill="white"/>
              <path d="M9.5 16c.8 1.2 2 1.8 2.5 1.8" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-.03em", color: "var(--ink)" }}>
              Mitra<span style={{ background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Qua</span>
            </div>
            <div style={{ fontSize: ".58rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: -2 }}>Air Galon Isi Ulang</div>
          </div>
        </div>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }} className="hide-mob">
          {links.map(l => (
            <li key={l.href}>
              <button onClick={() => go(l.href)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--sub)", fontSize: ".875rem", fontWeight: 500, fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "color .2s", padding: 0 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--violet)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--sub)")}
              >{l.label}</button>
            </li>
          ))}
        </ul>

        <button onClick={() => go("#pesan")} className="hide-mob" style={{ background: "var(--grad-main)", color: "#fff", border: "none", padding: ".65rem 1.5rem", borderRadius: 100, fontSize: ".875rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 16px rgba(99,88,229,.25)", transition: "all .2s" }}
          onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-1px)"); (e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,88,229,.38)"); }}
          onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,88,229,.25)"); }}
        >💧 Pesan Sekarang</button>

        <button onClick={() => setOpen(!open)} className="show-mob" style={{ background: "none", border: "1px solid var(--border2)", cursor: "pointer", borderRadius: 8, padding: "8px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 20, height: 2, background: "var(--violet)", display: "block", borderRadius: 2 }} />)}
        </button>
      </nav>

      {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(15,14,43,.4)", zIndex: 250, backdropFilter: "blur(4px)" }} />}
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "80%", maxWidth: 280, background: "#fff", zIndex: 300, padding: "5rem 2rem 2rem", boxShadow: "-8px 0 40px rgba(99,88,229,.1)", display: "flex", flexDirection: "column", gap: ".5rem", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .35s cubic-bezier(.4,0,.2,1)" }}>
        {links.map(l => (
          <button key={l.href} onClick={() => go(l.href)} style={{ background: "none", border: "none", borderBottom: "1px solid var(--border)", padding: "1rem 0", textAlign: "left", cursor: "pointer", color: "var(--text)", fontSize: "1rem", fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{l.label}</button>
        ))}
        <button onClick={() => go("#pesan")} style={{ background: "var(--grad-main)", color: "#fff", border: "none", padding: ".85rem", borderRadius: 100, fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: "1rem" }}>💧 Pesan Sekarang</button>
      </div>
      <style>{`.hide-mob{} @media(max-width:768px){.hide-mob{display:none!important}} @media(min-width:769px){.show-mob{display:none!important}}`}</style>
    </>
  );
}
