export default function Harga() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="harga" style={{ padding: "7rem 5%", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-warm)", display: "inline-block" }} />
            <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--rose)", letterSpacing: ".14em", textTransform: "uppercase" }}>Harga & Paket</span>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-warm)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--ink)" }}>
            Transparan,{" "}
            <span style={{ background: "var(--grad-warm)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tanpa Biaya Tersembunyi</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr 1fr", gap: "1.5rem", alignItems: "start" }}>

          {/* Satuan */}
          <div className="reveal" style={{ background: "#fff", borderRadius: 22, padding: "2.5rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)", transition: "box-shadow .3s" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 48px rgba(99,88,229,.12)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow)")}
          >
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.5rem", boxShadow: "0 6px 18px rgba(99,88,229,.25)" }}>💧</div>
            <div style={{ color: "var(--muted)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Satuan</div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.05em", color: "var(--ink)", lineHeight: 1 }}>Rp 6.000</div>
            <div style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: ".4rem", marginBottom: "2rem" }}>per galon 20 liter</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".7rem" }}>
              {["Isi ulang langsung di tempat","Air mineral bersih 20L","Filtrasi 7 tahap","Tersedia setiap hari"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".65rem", color: "var(--sub)", fontSize: ".875rem" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: "#fff", fontWeight: 800, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => go("#pesan")} style={{ width: "100%", marginTop: "2rem", padding: ".9rem", border: "1.5px solid rgba(99,88,229,.2)", background: "transparent", color: "var(--violet)", borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, cursor: "pointer", fontSize: ".9rem", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget.style.background = "var(--grad-main)"); (e.currentTarget.style.color = "#fff"); (e.currentTarget.style.borderColor = "transparent"); }}
              onMouseLeave={e => { (e.currentTarget.style.background = "transparent"); (e.currentTarget.style.color = "var(--violet)"); (e.currentTarget.style.borderColor = "rgba(99,88,229,.2)"); }}
            >Pesan Sekarang</button>
          </div>

          {/* Paket 10 — Popular, elevated */}
          <div className="reveal" style={{ background: "#fff", borderRadius: 22, padding: "2.5rem", border: "1.5px solid rgba(99,88,229,.25)", boxShadow: "0 20px 60px rgba(99,88,229,.15)", position: "relative", transform: "translateY(-10px)" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--grad-main)", color: "#fff", fontSize: ".72rem", fontWeight: 800, padding: ".35rem 1.2rem", borderRadius: 100, whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(99,88,229,.3)", letterSpacing: ".06em" }}>⭐ PALING HEMAT</div>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--grad-royal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.5rem", boxShadow: "0 6px 18px rgba(244,63,138,.25)" }}>💧💧</div>
            <div style={{ color: "var(--violet)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Paket 10 Galon</div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.05em", color: "var(--ink)", lineHeight: 1 }}>Rp 55.000</div>
            <div style={{ color: "var(--rose)", fontSize: ".82rem", fontWeight: 600, marginTop: ".35rem" }}>Hemat Rp 5.000 dari harga normal</div>
            <div style={{ color: "var(--muted)", fontSize: ".78rem", marginBottom: "2rem" }}>= Rp 5.500 per galon</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".7rem" }}>
              {["10 galon 20 liter","Gratis antar ke rumah","Prioritas antrian","Berlaku 30 hari","Konfirmasi via WhatsApp"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".65rem", color: "var(--sub)", fontSize: ".875rem" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--grad-royal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: "#fff", fontWeight: 800, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => go("#pesan")} style={{ width: "100%", marginTop: "2rem", padding: ".9rem", border: "none", background: "var(--grad-main)", color: "#fff", borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, cursor: "pointer", fontSize: ".95rem", transition: "all .2s", boxShadow: "0 8px 24px rgba(99,88,229,.3)" }}
              onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-1px)"); (e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,88,229,.42)"); }}
              onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,88,229,.3)"); }}
            >Ambil Paket Ini 💧</button>
          </div>

          {/* Langganan */}
          <div className="reveal" style={{ background: "#fff", borderRadius: 22, padding: "2.5rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)", transition: "box-shadow .3s" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 48px rgba(10,189,227,.1)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow)")}
          >
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--grad-cool)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.5rem", boxShadow: "0 6px 18px rgba(10,189,227,.25)" }}>💧💧💧</div>
            <div style={{ color: "var(--muted)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Langganan Bulanan</div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.05em", color: "var(--ink)", lineHeight: 1 }}>Custom</div>
            <div style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: ".4rem", marginBottom: "2rem" }}>sesuai kebutuhan rumah tangga</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".7rem" }}>
              {["Jumlah galon fleksibel","Jadwal antar rutin","Harga spesial negosiasi","Prioritas pelayanan","Cocok untuk keluarga & kantor"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".65rem", color: "var(--sub)", fontSize: ".875rem" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--grad-cool)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: "#fff", fontWeight: 800, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open("https://wa.me/6281234567892?text=Halo%20Mitra%20Qua%2C%20saya%20mau%20tanya%20paket%20langganan", "_blank")} style={{ width: "100%", marginTop: "2rem", padding: ".9rem", border: "1.5px solid rgba(10,189,227,.25)", background: "transparent", color: "var(--aqua)", borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, cursor: "pointer", fontSize: ".9rem", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget.style.background = "var(--grad-cool)"); (e.currentTarget.style.color = "#fff"); (e.currentTarget.style.borderColor = "transparent"); }}
              onMouseLeave={e => { (e.currentTarget.style.background = "transparent"); (e.currentTarget.style.color = "var(--aqua)"); (e.currentTarget.style.borderColor = "rgba(10,189,227,.25)"); }}
            >Hubungi Kami</button>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#harga>div>div:last-child{grid-template-columns:1fr!important} #harga>div>div:last-child>div:nth-child(2){transform:none!important}}`}</style>
    </section>
  );
}
