export default function Keunggulan() {
  const items = [
    { icon: "🧪", title: "Filtrasi 7 Tahap", desc: "Sediment, carbon, RO membrane, UV, dan ozonisasi. Standar air minum internasional yang terjamin.", color: "#0EA5E9" },
    { icon: "📋", title: "Tersertifikasi BPOM", desc: "Izin resmi Dinas Kesehatan dan BPOM. Semua produk kami memenuhi standar air minum nasional.", color: "#0284C7" },
    { icon: "🚚", title: "Antar Gratis", desc: "Gratis ongkir untuk paket 10 galon ke atas. Jangkauan pengiriman radius 5 km dari depot.", color: "#38BDF8" },
    { icon: "⚡", title: "Proses 5 Menit", desc: "Isi ulang selesai dalam 5 menit. Tidak perlu menunggu lama — langsung bawa pulang.", color: "#0EA5E9" },
    { icon: "🌊", title: "TDS Optimal", desc: "Kadar TDS dijaga di angka 50–150 ppm — range ideal untuk air minum yang sehat.", color: "#0284C7" },
    { icon: "🕐", title: "Buka 7 Hari", desc: "Senin–Minggu pukul 07.00–21.00 WIB. Termasuk hari libur. Air tidak pernah habis.", color: "#38BDF8" },
  ];
  return (
    <section id="keunggulan" style={{ background: "#FFFFFF", padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(14,165,233,.04) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", marginBottom: "5rem" }}>
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
              Keunggulan
            </div>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.04em", lineHeight: 1.05, color: "#0F172A" }}>
              Bukan Sekadar<br />
              <span style={{ background: "linear-gradient(135deg, var(--sky), var(--deep))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Air Biasa</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: "rgba(15,23,42,.5)", fontSize: "1rem", lineHeight: 1.85 }}>
            Kami tidak hanya mengisi galon — kami memastikan setiap tetes yang masuk ke tubuh keluarga Anda benar-benar bersih, sehat, dan aman sesuai standar internasional.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {items.map((item) => (
            <div key={item.title} className="reveal" style={{
              background: "#F8FAFC", border: "1px solid rgba(14,165,233,.1)",
              borderRadius: 16, padding: "2rem", transition: "all .3s", position: "relative", overflow: "hidden",
              boxShadow: "0 2px 8px rgba(14,165,233,.05)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(14,165,233,.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,.1)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(14,165,233,.05)"; }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)` }} />
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${item.color}10`, border: `1px solid ${item.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.05rem", marginBottom: ".6rem", letterSpacing: "-.02em", color: "#0F172A" }}>{item.title}</h3>
              <p style={{ color: "rgba(15,23,42,.5)", fontSize: ".875rem", lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          #keunggulan > div > div:first-child{grid-template-columns:1fr!important;gap:1.5rem!important}
          #keunggulan > div > div:last-child{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:500px){ #keunggulan > div > div:last-child{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
