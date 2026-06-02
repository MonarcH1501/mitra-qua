export default function Proses() {
  const steps = [
    { n: "01", icon: "🪣", title: "Bawa Galon", desc: "Bawa galon kosong ke depot kami. Kami juga sediakan galon pinjam gratis untuk pelanggan baru yang belum punya.", color: "var(--grad-main)", shadow: "rgba(99,88,229,.2)" },
    { n: "02", icon: "🔬", title: "Filtrasi 7 Tahap", desc: "Sediment filter → carbon block → RO membrane → post carbon → UV sterilisasi → ozonisasi → mineral balancing.", color: "var(--grad-cool)", shadow: "rgba(10,189,227,.2)" },
    { n: "03", icon: "🧫", title: "Uji Kualitas", desc: "Setiap batch diuji TDS, pH, dan bebas bakteri. Standar air minum SNI terpenuhi dan dicatat setiap hari.", color: "var(--grad-royal)", shadow: "rgba(244,63,138,.2)" },
    { n: "04", icon: "💧", title: "Galon Terisi Penuh", desc: "20 liter air bersih siap dalam hitungan menit. Bawa langsung atau kami antar ke rumah Anda hari ini.", color: "var(--grad-warm)", shadow: "rgba(245,166,35,.2)" },
  ];
  return (
    <section id="proses" style={{ padding: "7rem 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-main)", display: "inline-block" }} />
            <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--violet)", letterSpacing: ".14em", textTransform: "uppercase" }}>Proses Kami</span>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-main)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--ink)", marginBottom: ".75rem" }}>
            Dari Sumber ke Galon —{" "}
            <span style={{ background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tanpa Kompromi</span>
          </h2>
          <p style={{ color: "var(--sub)", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>Setiap tetes yang masuk ke galon Anda melewati proses ketat yang kami jaga setiap hari.</p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" style={{ background: "#fff", borderRadius: 20, padding: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)", transition: "transform .3s, box-shadow .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${s.shadow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color, borderRadius: "20px 20px 0 0" }} />
              {/* Step number watermark */}
              <div style={{ position: "absolute", top: ".5rem", right: "1rem", fontFamily: "Syne,sans-serif", fontWeight: 900, fontSize: "4.5rem", color: "rgba(99,88,229,.04)", lineHeight: 1, letterSpacing: "-.05em" }}>{s.n}</div>
              {/* Icon */}
              <div style={{ width: 54, height: 54, borderRadius: 14, background: `${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "1.5rem", boxShadow: `0 6px 18px ${s.shadow}` }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--ink)", marginBottom: ".6rem", letterSpacing: "-.02em" }}>{s.title}</h3>
              <p style={{ color: "var(--sub)", fontSize: ".875rem", lineHeight: 1.75 }}>{s.desc}</p>
              {/* Arrow connector */}
              {i < 3 && (
                <div style={{ position: "absolute", top: "50%", right: -12, transform: "translateY(-50%)", zIndex: 2, width: 22, height: 22, borderRadius: "50%", background: "#fff", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".65rem", color: "var(--violet)", boxShadow: "var(--shadow)" }}>▶</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){#proses>div>div:last-child{grid-template-columns:1fr 1fr!important}} @media(max-width:500px){#proses>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
