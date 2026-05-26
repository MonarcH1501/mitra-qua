export default function Proses() {
  const steps = [
    { n: "01", icon: "🪣", title: "Bawa Galon", desc: "Bawa galon kosong Anda ke depot kami. Kami juga menyediakan galon pinjam gratis untuk pelanggan baru." },
    { n: "02", icon: "🔬", title: "Filtrasi 7 Tahap", desc: "Air diproses melalui sediment filter, carbon block, RO membrane, UV sterilisasi, dan ozonisasi untuk kesempurnaan." },
    { n: "03", icon: "🧫", title: "Uji Kualitas", desc: "Setiap batch diuji kadar TDS, pH, dan bebas bakteri sebelum dikemas. Standar air minum SNI terpenuhi." },
    { n: "04", icon: "💧", title: "Galon Terisi", desc: "Galon Anda terisi penuh 20 liter dalam hitungan menit. Bisa langsung dibawa atau kami antar ke rumah." },
  ];

  return (
    <section id="proses" style={{ background: "var(--ink2)", padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      {/* BG accent */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: "radial-gradient(circle, rgba(14,165,233,.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
            Proses Kami
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-.04em", marginBottom: ".75rem" }}>
            Dari Sumber ke Galon<br />
            <span style={{ background: "linear-gradient(135deg, var(--sky2), var(--sky))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tanpa Kompromi</span>
          </h2>
          <p style={{ color: "rgba(240,249,255,.45)", fontSize: "1rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
            Setiap tetes yang masuk ke galon Anda telah melewati proses ketat yang kami jaga setiap hari.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }}>
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" style={{
              background: "var(--ink2)", padding: "2.5rem 2rem",
              transition: "background .3s", position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--ink3)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--ink2)")}
            >
              {/* Step number watermark */}
              <div style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "5rem", color: "rgba(14,165,233,.06)", letterSpacing: "-.05em", lineHeight: 1 }}>{s.n}</div>
              {/* Icon circle */}
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(14,165,233,.1)", border: "1px solid rgba(14,165,233,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "1.5rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: ".65rem", letterSpacing: "-.02em" }}>{s.title}</h3>
              <p style={{ color: "rgba(240,249,255,.45)", fontSize: ".875rem", lineHeight: 1.75 }}>{s.desc}</p>
              {/* Connector arrow */}
              {i < 3 && <div style={{ position: "absolute", top: "50%", right: -10, transform: "translateY(-50%)", color: "var(--sky)", fontSize: ".8rem", zIndex: 2 }}>▶</div>}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ #proses > div > div:last-child{grid-template-columns:1fr 1fr!important} }
        @media(max-width:500px){ #proses > div > div:last-child{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
