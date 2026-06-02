export default function Ulasan() {
  const reviews = [
    { name: "Ibu Sari", role: "Pelanggan Tetap, Pontianak Selatan", init: "IS", text: "Sudah 3 tahun jadi pelanggan Mitra Qua. Harga murah tapi kualitas airnya enak banget, tidak ada rasa apek. Anakku yang kecil pun suka minum air putih sekarang.", grad: "var(--grad-main)" },
    { name: "Pak Rudi", role: "Pemilik Warung, Pontianak Kota", init: "PR", text: "Pakai paket 10 galon, langsung diantar ke warung. Tidak perlu repot keluar sendiri. Pelayanannya cepat dan ramah, kualitas airnya konsisten.", grad: "var(--grad-cool)" },
    { name: "Dini A.", role: "Karyawan Kantoran, Pontianak Timur", init: "DA", text: "Pertama coba karena harganya murah, ternyata kualitasnya bagus banget. Sekarang semua teman kantor ikut pesan di sini. Recommended banget!", grad: "var(--grad-royal)" },
    { name: "Pak Budi", role: "RT 05, Sungai Raya", init: "PB", text: "Saya rekomendasiin Mitra Qua ke semua warga RT kami. Sekarang hampir 20 rumah jadi pelanggan. Harga terjangkau, air bersih, pengiriman tepat waktu.", grad: "var(--grad-warm)" },
    { name: "Ibu Dewi", role: "Ibu Rumah Tangga, Pontianak Barat", init: "ID", text: "Suka karena bisa pesan lewat WhatsApp, langsung diantar. Tidak perlu keluar bawa galon berat. Cocok banget untuk ibu-ibu kayak saya.", grad: "var(--grad-main)" },
    { name: "Mas Arif", role: "Anak Kos, Pontianak Utara", init: "MA", text: "Buat anak kos kayak saya, harga Rp 6.000 per galon itu sangat terjangkau. Tidak perlu beli air botolan lagi. Hemat banget di akhir bulan.", grad: "var(--grad-cool)" },
  ];
  return (
    <section id="ulasan" style={{ padding: "7rem 5%", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-royal)", display: "inline-block" }} />
              <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--rose)", letterSpacing: ".14em", textTransform: "uppercase" }}>Ulasan Pelanggan</span>
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--ink)", lineHeight: .95 }}>
              1.200+ Keluarga{" "}
              <span style={{ background: "var(--grad-royal)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sudah Percaya</span>
            </h2>
          </div>
          <div className="reveal" style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 18, padding: "1.5rem 2rem", textAlign: "center", boxShadow: "var(--shadow)" }}>
            <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 900, fontSize: "3.5rem", letterSpacing: "-.05em", background: "var(--grad-warm)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>4.9</div>
            <div style={{ color: "#F59E0B", fontSize: "1rem", letterSpacing: 2, margin: ".3rem 0" }}>★★★★★</div>
            <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>dari 1.200+ ulasan</div>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
          {reviews.map((r) => (
            <div key={r.name} className="reveal" style={{ background: "#fff", borderRadius: 18, padding: "1.75rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)", transition: "all .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; }}
            >
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: r.grad }} />
              <div style={{ color: "#F59E0B", fontSize: ".9rem", letterSpacing: 3, marginBottom: ".85rem" }}>★★★★★</div>
              <p style={{ color: "var(--sub)", fontSize: ".875rem", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: ".65rem", borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: r.grad, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".82rem", color: "#fff", flexShrink: 0, boxShadow: "0 4px 12px rgba(99,88,229,.2)" }}>{r.init}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: ".875rem", color: "var(--ink)" }}>{r.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: ".75rem", marginTop: ".1rem" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){#ulasan>div>div:last-child{grid-template-columns:1fr 1fr!important}} @media(max-width:500px){#ulasan>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
