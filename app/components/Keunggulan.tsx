export default function Keunggulan() {
  const items = [
    { icon: "🧪", title: "Filtrasi 7 Tahap", desc: "Sediment, carbon, RO membrane, UV, dan ozonisasi. Standar air minum internasional yang terjamin setiap hari.", grad: "var(--grad-main)", shadow: "rgba(99,88,229,.18)" },
    { icon: "📋", title: "Tersertifikasi BPOM", desc: "Izin resmi Dinas Kesehatan dan BPOM. Semua produk memenuhi standar air minum nasional SNI.", grad: "var(--grad-cool)", shadow: "rgba(10,189,227,.18)" },
    { icon: "🚚", title: "Antar Gratis", desc: "Gratis ongkir untuk paket 10 galon ke atas. Jangkauan pengiriman radius 5 km dari depot.", grad: "var(--grad-royal)", shadow: "rgba(244,63,138,.18)" },
    { icon: "⚡", title: "Proses 5 Menit", desc: "Isi ulang selesai dalam 5 menit. Tidak perlu menunggu lama — langsung bawa pulang dan minum.", grad: "var(--grad-warm)", shadow: "rgba(245,166,35,.18)" },
    { icon: "🌊", title: "TDS Optimal", desc: "Kadar TDS dijaga di angka 50–150 ppm — range ideal untuk air minum yang benar-benar sehat.", grad: "var(--grad-main)", shadow: "rgba(99,88,229,.18)" },
    { icon: "🕐", title: "Buka 7 Hari", desc: "Senin–Minggu pukul 07.00–21.00 WIB termasuk hari libur. Air bersih tidak pernah libur.", grad: "var(--grad-cool)", shadow: "rgba(10,189,227,.18)" },
  ];

  return (
    <section id="keunggulan" style={{ padding: "7rem 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Header split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "5rem" }}>
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-cool)", display: "inline-block" }} />
              <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--aqua)", letterSpacing: ".14em", textTransform: "uppercase" }}>Keunggulan</span>
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--ink)", lineHeight: 1.1 }}>
              Bukan Sekadar{" "}
              <span style={{ background: "var(--grad-cool)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Air Biasa</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: "var(--sub)", fontSize: "1rem", lineHeight: 1.85 }}>
            Kami tidak hanya mengisi galon — kami memastikan setiap tetes yang masuk ke tubuh keluarga Anda benar-benar bersih, sehat, dan aman sesuai standar internasional.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {items.map((item) => (
            <div key={item.title} className="reveal" style={{ background: "#fff", borderRadius: 20, padding: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)", transition: "all .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${item.shadow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; }}
            >
              {/* Top gradient line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: item.grad }} />
              <div style={{ width: 50, height: 50, borderRadius: 14, background: item.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem", boxShadow: `0 6px 18px ${item.shadow}` }}>{item.icon}</div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--ink)", marginBottom: ".6rem" }}>{item.title}</h3>
              <p style={{ color: "var(--sub)", fontSize: ".875rem", lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){#keunggulan>div>div:first-child{grid-template-columns:1fr!important;gap:1.5rem!important} #keunggulan>div>div:last-child{grid-template-columns:1fr 1fr!important}}
        @media(max-width:500px){#keunggulan>div>div:last-child{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
