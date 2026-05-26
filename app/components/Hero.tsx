export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", background: "#FFFFFF", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

      {/* Soft blobs background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 700, height: 700, top: "-20%", right: "-15%", background: "radial-gradient(circle, rgba(14,165,233,.07) 0%, transparent 70%)", animation: "blob 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 500, height: 500, bottom: "5%", left: "-8%", background: "radial-gradient(circle, rgba(3,105,161,.06) 0%, transparent 70%)", animation: "blob 14s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", width: 350, height: 350, top: "35%", left: "38%", background: "radial-gradient(circle, rgba(56,189,248,.05) 0%, transparent 70%)", animation: "blob 8s ease-in-out infinite 2s" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(14,165,233,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 5%", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "4rem", position: "relative", zIndex: 2, paddingTop: "6rem" }}>

        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", background: "rgba(14,165,233,.08)", border: "1px solid rgba(14,165,233,.18)", borderRadius: 100, padding: ".35rem 1rem .35rem .5rem", marginBottom: "2rem", animation: "fadeUp .6s ease both" }}>
            <div style={{ background: "var(--sky)", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".7rem" }}>💧</div>
            <span style={{ color: "var(--sky2)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".06em" }}>Tersertifikasi & Terjamin Bersih</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(3rem,6.5vw,6rem)", lineHeight: .95, letterSpacing: "-.04em", marginBottom: "1.75rem", animation: "fadeUp .6s .1s ease both" }}>
            <span style={{ display: "block", color: "#0F172A" }}>Air Bersih</span>
            <span style={{ display: "block", background: "linear-gradient(135deg, var(--sky), var(--deep))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Harga Hemat</span>
            <span style={{ display: "block", color: "rgba(15,23,42,.2)" }}>Setiap Hari</span>
          </h1>

          <p style={{ color: "rgba(15,23,42,.55)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 420, marginBottom: "2.5rem", animation: "fadeUp .6s .2s ease both" }}>
            Isi ulang galon 20 liter cukup <strong style={{ color: "var(--sky2)", fontWeight: 700 }}>Rp 6.000</strong> saja. Air minum sehat untuk keluarga Anda dengan proses filtrasi 7 tahap yang higienis dan modern.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp .6s .3s ease both" }}>
            <a href="#pesan" style={{
              background: "linear-gradient(135deg, var(--sky), var(--deep))",
              color: "#fff", padding: "1rem 2rem", borderRadius: 100,
              fontWeight: 700, textDecoration: "none", fontSize: "1rem",
              boxShadow: "0 8px 30px rgba(14,165,233,.35)", transition: "all .25s",
              display: "flex", alignItems: "center", gap: ".5rem",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(14,165,233,.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(14,165,233,.35)"; }}
            >Pesan Sekarang 💧</a>
            <a href="#proses" style={{
              color: "rgba(15,23,42,.55)", border: "1px solid rgba(14,165,233,.22)",
              padding: "1rem 2rem", borderRadius: 100, fontWeight: 500,
              textDecoration: "none", fontSize: ".95rem", transition: "all .25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sky)"; (e.currentTarget as HTMLElement).style.color = "var(--sky)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,.22)"; (e.currentTarget as HTMLElement).style.color = "rgba(15,23,42,.55)"; }}
            >Lihat Proses →</a>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", flexWrap: "wrap", animation: "fadeUp .6s .4s ease both" }}>
            {[
              { icon: "🏆", label: "BPOM Certified" },
              { icon: "🧪", label: "Lab Tested" },
              { icon: "⚡", label: "Proses Cepat" },
            ].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
                <span style={{ fontSize: ".9rem" }}>{b.icon}</span>
                <span style={{ color: "rgba(15,23,42,.4)", fontSize: ".78rem", fontWeight: 500, letterSpacing: ".06em" }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Galon visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Ripple rings */}
          {[1,2,3].map(i => (
            <div key={i} style={{
              position: "absolute", borderRadius: "50%",
              border: `1px solid rgba(14,165,233,${.12 / i})`,
              width: `${180 + i * 90}px`, height: `${180 + i * 90}px`,
              animation: `ripple ${2 + i}s ease-out infinite ${i * .6}s`,
            }} />
          ))}

          {/* Main galon card */}
          <div style={{
            width: 280, height: 380, borderRadius: 24,
            background: "linear-gradient(160deg, rgba(14,165,233,.07) 0%, rgba(3,105,161,.04) 100%)",
            border: "1px solid rgba(14,165,233,.15)",
            backdropFilter: "blur(10px)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            animation: "float 5s ease-in-out infinite",
            boxShadow: "0 20px 60px rgba(14,165,233,.1), inset 0 1px 0 rgba(255,255,255,.8)",
          }}>
            {/* Water shimmer inside card */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(14,165,233,.08), transparent)", borderRadius: "0 0 24px 24px" }} />
            <div style={{ position: "absolute", bottom: "32%", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,.3), transparent)" }} />

            {/* Galon icon big */}
            <div style={{ fontSize: "7rem", marginBottom: "1rem", filter: "drop-shadow(0 8px 24px rgba(14,165,233,.3))", animation: "dropFall .8s .5s ease both" }}>💧</div>

            {/* Price tag */}
            <div style={{
              background: "linear-gradient(135deg, var(--sky), var(--deep))",
              borderRadius: 14, padding: "1rem 1.5rem", textAlign: "center",
              boxShadow: "0 8px 24px rgba(14,165,233,.35)",
            }}>
              <div style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", opacity: .85, marginBottom: ".2rem", color: "#fff" }}>Harga Isi Ulang</div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "2.4rem", letterSpacing: "-.04em", lineHeight: 1, color: "#fff" }}>Rp 6.000</div>
              <div style={{ fontSize: ".75rem", opacity: .85, marginTop: ".3rem", color: "#fff" }}>per galon 20 liter</div>
            </div>

            {/* Top shine */}
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(14,165,233,.2), transparent)" }} />
          </div>

          {/* Floating chips */}
          <div style={{ position: "absolute", top: "8%", right: "-2%", background: "#FFFFFF", border: "1px solid rgba(14,165,233,.15)", borderRadius: 12, padding: ".75rem 1rem", animation: "float 6s ease-in-out infinite 1s", boxShadow: "0 4px 20px rgba(14,165,233,.1)" }}>
            <div style={{ fontSize: ".65rem", color: "var(--muted)", marginBottom: ".2rem" }}>Pelanggan Aktif</div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sky2)" }}>1.200+</div>
          </div>
          <div style={{ position: "absolute", bottom: "12%", left: "-4%", background: "#FFFFFF", border: "1px solid rgba(14,165,233,.15)", borderRadius: 12, padding: ".75rem 1rem", animation: "float 7s ease-in-out infinite .5s", boxShadow: "0 4px 20px rgba(14,165,233,.1)" }}>
            <div style={{ fontSize: ".65rem", color: "var(--muted)", marginBottom: ".2rem" }}>Rating</div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sky2)" }}>⭐ 4.9/5</div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F8FAFC" />
        </svg>
      </div>

      <style>{`
        @media(max-width:900px){
          #home > div { grid-template-columns: 1fr !important; padding-top: 8rem !important; }
          #home > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
