export default function Ulasan() {
  const reviews = [
    { name: "Ibu Sari", role: "Pelanggan Tetap, Pontianak Selatan", init: "IS", text: "Sudah 3 tahun jadi pelanggan Mitra Qua. Harga murah tapi kualitas airnya enak banget, tidak ada rasa apek. Anakku yang kecil pun suka minum air putih sekarang.", rating: 5 },
    { name: "Pak Rudi", role: "Pemilik Warung, Pontianak Kota", init: "PR", text: "Pakai paket 10 galon, langsung diantar ke warung. Tidak perlu repot keluar sendiri. Pelayanannya cepat dan ramah, kualitas airnya konsisten.", rating: 5 },
    { name: "Dini A.", role: "Karyawan Kantoran, Pontianak Timur", init: "DA", text: "Pertama coba karena harganya murah, ternyata kualitasnya bagus banget. Sekarang semua teman kantor ikut pesan di sini. Recommended banget!", rating: 5 },
    { name: "Pak Budi", role: "RT 05, Sungai Raya", init: "PB", text: "Saya rekomendasiin Mitra Qua ke semua warga RT kami. Sekarang hampir 20 rumah jadi pelanggan. Harga terjangkau, air bersih, pengiriman tepat waktu.", rating: 5 },
    { name: "Ibu Dewi", role: "Ibu Rumah Tangga, Pontianak Barat", init: "ID", text: "Suka karena bisa pesan lewat WhatsApp, langsung diantar. Tidak perlu keluar bawa galon berat. Cocok banget untuk ibu-ibu kayak saya.", rating: 5 },
    { name: "Mas Arif", role: "Anak Kos, Pontianak Utara", init: "MA", text: "Buat anak kos kayak saya, harga Rp 6.000 per galon itu sangat terjangkau. Tidak perlu beli air botolan lagi. Hemat banget di akhir bulan.", rating: 5 },
  ];
  return (
    <section id="ulasan" style={{ padding: "7rem 5%", maxWidth: 1300, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
        <div className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
            Ulasan Pelanggan
          </div>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-.04em", lineHeight: .95 }}>
            1.200+ Keluarga<br />
            <span style={{ background: "linear-gradient(135deg,var(--sky2),var(--sky))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sudah Percaya</span>
          </h2>
        </div>
        <div className="reveal" style={{ background: "var(--ink2)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem 2rem", textAlign: "center" }}>
          <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "3.5rem", color: "var(--sky2)", letterSpacing: "-.05em", lineHeight: 1 }}>4.9</div>
          <div style={{ color: "#FBBF24", fontSize: "1rem", letterSpacing: 2, margin: ".3rem 0" }}>★★★★★</div>
          <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>dari 1.200+ ulasan</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
        {reviews.map((r) => (
          <div key={r.name} className="reveal" style={{
            background: "var(--ink2)", border: "1px solid var(--border)",
            borderRadius: 16, padding: "1.75rem", transition: "all .3s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            <div style={{ color: "#FBBF24", fontSize: ".9rem", letterSpacing: 2, marginBottom: ".85rem" }}>{"★".repeat(r.rating)}</div>
            <p style={{ color: "rgba(240,249,255,.6)", fontSize: ".875rem", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>"{r.text}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: ".65rem", borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, var(--sky), var(--deep))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".82rem" }}>{r.init}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: ".875rem" }}>{r.name}</div>
                <div style={{ color: "var(--muted)", fontSize: ".75rem", marginTop: ".1rem" }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){ #ulasan > div:last-child{grid-template-columns:1fr 1fr!important} }
        @media(max-width:500px){ #ulasan > div:last-child{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
