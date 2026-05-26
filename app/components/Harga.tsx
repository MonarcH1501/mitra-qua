export default function Harga() {
  return (
    <section id="harga" style={{ background: "#FFFFFF", padding: "7rem 5%" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
            Harga & Paket
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-.04em", color: "#0F172A" }}>
            Transparan,{" "}
            <span style={{ background: "linear-gradient(135deg, var(--sky), var(--deep))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tanpa Biaya Tersembunyi</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", alignItems: "start" }}>

          {/* Single */}
          <div className="reveal" style={{
            background: "#F8FAFC", border: "1px solid rgba(14,165,233,.1)",
            borderRadius: 20, padding: "2.5rem", transition: "all .3s",
            boxShadow: "0 2px 8px rgba(14,165,233,.05)",
          }}
            onMouseEnter={e => { (e.currentTarget.style.borderColor = "rgba(14,165,233,.22)"); (e.currentTarget.style.boxShadow = "0 8px 30px rgba(14,165,233,.1)"); }}
            onMouseLeave={e => { (e.currentTarget.style.borderColor = "rgba(14,165,233,.1)"); (e.currentTarget.style.boxShadow = "0 2px 8px rgba(14,165,233,.05)"); }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💧</div>
            <div style={{ color: "var(--muted)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Satuan</div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.04em", color: "#0F172A", lineHeight: 1 }}>Rp 6.000</div>
            <div style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: ".4rem", marginBottom: "2rem" }}>per galon 20 liter</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".65rem" }}>
              {["Isi ulang langsung di tempat","Air mineral bersih 20L","Proses filtrasi 7 tahap","Tersedia setiap hari"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".6rem", color: "rgba(15,23,42,.55)", fontSize: ".875rem" }}>
                  <span style={{ color: "var(--sky)", fontWeight: 700, fontSize: ".8rem" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => document.querySelector("#pesan")?.scrollIntoView({ behavior: "smooth" })} style={{
              width: "100%", marginTop: "2rem", padding: ".85rem", border: "1px solid rgba(14,165,233,.25)",
              background: "transparent", color: "var(--sky2)", borderRadius: 100,
              fontFamily: "Outfit, sans-serif", fontWeight: 700, cursor: "pointer", fontSize: ".9rem", transition: "all .2s",
            }}
              onMouseEnter={e => { (e.currentTarget.style.background = "rgba(14,165,233,.07)"); e.currentTarget.style.borderColor = "var(--sky)" }}
              onMouseLeave={e => { (e.currentTarget.style.background = "transparent"); (e.currentTarget.style.borderColor = "rgba(14,165,233,.25)"); }}
            >Pesan Sekarang</button>
          </div>

          {/* Paket 10 — Popular */}
          <div className="reveal" style={{
            background: "linear-gradient(160deg, rgba(14,165,233,.06), rgba(3,105,161,.03))",
            border: "1.5px solid rgba(14,165,233,.3)",
            borderRadius: 20, padding: "2.5rem",
            position: "relative", boxShadow: "0 16px 50px rgba(14,165,233,.12)",
            transform: "translateY(-8px)",
          }}>
            <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, var(--sky), var(--deep))", color: "#fff", fontSize: ".72rem", fontWeight: 700, padding: ".3rem 1.1rem", borderRadius: 100, letterSpacing: ".08em", whiteSpace: "nowrap" }}>⭐ PALING HEMAT</div>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💧💧</div>
            <div style={{ color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Paket 10 Galon</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".5rem" }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.04em", color: "#0F172A", lineHeight: 1 }}>Rp 55.000</div>
            </div>
            <div style={{ color: "var(--sky2)", fontSize: ".82rem", marginTop: ".4rem", marginBottom: ".2rem" }}>hemat Rp 5.000 dari harga normal</div>
            <div style={{ color: "var(--muted)", fontSize: ".78rem", marginBottom: "2rem" }}>= Rp 5.500 per galon</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".65rem" }}>
              {["10 galon 20 liter","Gratis antar ke rumah","Prioritas antrian","Berlaku 30 hari","Konfirmasi via WhatsApp"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".6rem", color: "rgba(15,23,42,.65)", fontSize: ".875rem" }}>
                  <span style={{ color: "var(--sky)", fontWeight: 700, fontSize: ".8rem" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => document.querySelector("#pesan")?.scrollIntoView({ behavior: "smooth" })} style={{
              width: "100%", marginTop: "2rem", padding: ".85rem",
              background: "linear-gradient(135deg, var(--sky), var(--deep))",
              border: "none", color: "#fff", borderRadius: 100,
              fontFamily: "Outfit, sans-serif", fontWeight: 700, cursor: "pointer", fontSize: ".9rem",
              boxShadow: "0 6px 20px rgba(14,165,233,.35)", transition: "all .2s",
            }}
              onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-1px)"); (e.currentTarget.style.boxShadow = "0 10px 28px rgba(14,165,233,.5)"); }}
              onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 6px 20px rgba(14,165,233,.35)"); }}
            >Ambil Paket Ini 💧</button>
          </div>

          {/* Paket Bulanan */}
          <div className="reveal" style={{
            background: "#F8FAFC", border: "1px solid rgba(14,165,233,.1)",
            borderRadius: 20, padding: "2.5rem", transition: "all .3s",
            boxShadow: "0 2px 8px rgba(14,165,233,.05)",
          }}
            onMouseEnter={e => { (e.currentTarget.style.borderColor = "rgba(14,165,233,.22)"); (e.currentTarget.style.boxShadow = "0 8px 30px rgba(14,165,233,.1)"); }}
            onMouseLeave={e => { (e.currentTarget.style.borderColor = "rgba(14,165,233,.1)"); (e.currentTarget.style.boxShadow = "0 2px 8px rgba(14,165,233,.05)"); }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💧💧💧</div>
            <div style={{ color: "var(--muted)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>Langganan Bulanan</div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "2.8rem", letterSpacing: "-.04em", color: "#0F172A", lineHeight: 1 }}>Custom</div>
            <div style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: ".4rem", marginBottom: "2rem" }}>sesuai kebutuhan rumah tangga</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".65rem" }}>
              {["Jumlah galon fleksibel","Jadwal antar rutin","Harga spesial negosiasi","Prioritas pelayanan","Cocok untuk keluarga & kantor"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: ".6rem", color: "rgba(15,23,42,.55)", fontSize: ".875rem" }}>
                  <span style={{ color: "var(--sky)", fontWeight: 700, fontSize: ".8rem" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open("https://wa.me/6281234567892?text=Halo%20Mitra%20Qua%2C%20saya%20mau%20tanya%20paket%20langganan%20bulanan","_blank")} style={{
              width: "100%", marginTop: "2rem", padding: ".85rem", border: "1px solid rgba(14,165,233,.25)",
              background: "transparent", color: "var(--sky2)", borderRadius: 100,
              fontFamily: "Outfit, sans-serif", fontWeight: 700, cursor: "pointer", fontSize: ".9rem", transition: "all .2s",
            }}
              onMouseEnter={e => { (e.currentTarget.style.background = "rgba(14,165,233,.07)"); (e.currentTarget.style.borderColor = "var(--sky)"); }}
              onMouseLeave={e => { (e.currentTarget.style.background = "transparent"); (e.currentTarget.style.borderColor = "rgba(14,165,233,.25)"); }}
            >Hubungi Kami</button>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ #harga > div > div:last-child{grid-template-columns:1fr!important} #harga > div > div:last-child > div:nth-child(2){transform:none!important} }
      `}</style>
    </section>
  );
}
