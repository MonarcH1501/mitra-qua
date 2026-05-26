"use client";
import { useState } from "react";

export function Pesan() {
  const [form, setForm] = useState({ nama: "", wa: "", alamat: "", paket: "", jumlah: "", catatan: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.nama || !form.wa) { alert("Mohon isi Nama dan WhatsApp!"); return; }
    const msg = encodeURIComponent(
      `Halo Mitra Qua! 💧\n\nSaya ingin pesan air galon:\n\nNama: *${form.nama}*\nWA: ${form.wa}\nAlamat: ${form.alamat || "-"}\nPaket: ${form.paket || "Satuan"}\nJumlah: ${form.jumlah || "1"} galon\nCatatan: ${form.catatan || "-"}\n\nMohon diproses. Terima kasih!`
    );
    setSent(true);
    setTimeout(() => window.open(`https://wa.me/6281234567892?text=${msg}`, "_blank"), 500);
  };

  const inp: React.CSSProperties = {
    width: "100%", background: "rgba(14,165,233,.04)",
    border: "1px solid rgba(14,165,233,.2)", color: "#0F172A",
    padding: ".85rem 1.1rem", borderRadius: 12,
    fontFamily: "Outfit, sans-serif", fontSize: ".9rem", outline: "none",
    transition: "border-color .2s, background .2s",
  };

  return (
    <section id="pesan" style={{ background: "#F8FAFC", borderTop: "1px solid rgba(14,165,233,.1)", padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      {/* BG glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 600, background: "radial-gradient(ellipse, rgba(14,165,233,.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "6rem", alignItems: "start", position: "relative", zIndex: 1 }}>

        {/* Left */}
        <div className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--sky)", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--sky)", display: "inline-block" }} />
            Pesan Sekarang
          </div>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-.04em", lineHeight: .95, marginBottom: "1.5rem" }}>
            Air Bersih<br />
            <span style={{ background: "linear-gradient(135deg,var(--sky2),var(--sky))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Langsung ke</span><br />
            Rumah Anda
          </h2>
          <p style={{ color: "rgba(15,23,42,.5)", fontSize: ".95rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Isi form di samping atau langsung chat WhatsApp kami. Pesanan diproses dalam hitungan menit, antar hari yang sama untuk area Pontianak.
          </p>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "📍", label: "Lokasi Depot", val: "Jl. Sungai Raya No. 45, Pontianak" },
              { icon: "📞", label: "WhatsApp Order", val: "+62 812-3456-7892" },
              { icon: "🕐", label: "Jam Operasional", val: "Setiap Hari 07.00 – 21.00 WIB" },
              { icon: "🚚", label: "Jangkauan Antar", val: "Radius 5 km dari depot" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: ".85rem", alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: 10, background: "rgba(14,165,233,.08)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{item.icon}</div>
                <div>
                  <div style={{ color: "var(--muted)", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: ".9rem", marginTop: ".2rem" }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WA button */}
          <a href="https://wa.me/6281234567892?text=Halo%20Mitra%20Qua%20saya%20mau%20pesan%20galon" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: ".75rem",
            background: "#25D366", color: "#fff", padding: ".9rem 1.75rem",
            borderRadius: 100, fontWeight: 700, fontSize: ".9rem", textDecoration: "none",
            boxShadow: "0 4px 20px rgba(37,211,102,.3)", transition: "all .2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,211,102,.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,.3)"; }}
          >💬 Chat WhatsApp Langsung</a>
        </div>

        {/* Form */}
        <div className="reveal" style={{ background: "#FFFFFF", border: "1px solid rgba(14,165,233,.12)", borderRadius: 24, padding: "2.5rem", boxShadow: "0 8px 40px rgba(14,165,233,.1)" }}>
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-.03em", marginBottom: ".4rem", color: "#0F172A" }}>Form Pemesanan</h3>
          <p style={{ color: "var(--muted)", fontSize: ".82rem", marginBottom: "2rem" }}>Isi data Anda — kami konfirmasi via WhatsApp</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            {[{ label: "Nama Lengkap", id: "nama", ph: "Nama Anda" }, { label: "No. WhatsApp", id: "wa", ph: "08xx-xxxx-xxxx" }].map(f => (
              <div key={f.id}>
                <label style={{ display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 600 }}>{f.label}</label>
                <input style={inp} placeholder={f.ph}
                  value={form[f.id as keyof typeof form]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--sky)"; e.currentTarget.style.background = "rgba(14,165,233,.08)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "rgba(14,165,233,.05)"; }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 600 }}>Alamat Pengiriman</label>
            <input style={inp} placeholder="Alamat lengkap (jika ingin diantar)"
              value={form.alamat} onChange={e => setForm({ ...form, alamat: e.target.value })}
              onFocus={e => { e.currentTarget.style.borderColor = "var(--sky)"; e.currentTarget.style.background = "rgba(14,165,233,.08)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "rgba(14,165,233,.05)"; }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 600 }}>Paket</label>
              <select style={{ ...inp, cursor: "pointer" }} value={form.paket} onChange={e => setForm({ ...form, paket: e.target.value })}>
                <option value="">Satuan (Rp 6.000)</option>
                <option>Paket 10 Galon (Rp 55.000)</option>
                <option>Langganan Bulanan</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 600 }}>Jumlah Galon</label>
              <input style={inp} type="number" placeholder="1" min="1"
                value={form.jumlah} onChange={e => setForm({ ...form, jumlah: e.target.value })}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--sky)"; e.currentTarget.style.background = "rgba(14,165,233,.08)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "rgba(14,165,233,.05)"; }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 600 }}>Catatan (Opsional)</label>
            <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} placeholder="Catatan tambahan untuk kurir..."
              value={form.catatan} onChange={e => setForm({ ...form, catatan: e.target.value })}
              onFocus={e => { e.currentTarget.style.borderColor = "var(--sky)"; e.currentTarget.style.background = "rgba(14,165,233,.08)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "rgba(14,165,233,.05)"; }}
            />
          </div>

          <button onClick={submit} style={{
            width: "100%", padding: "1rem",
            background: "linear-gradient(135deg, var(--sky), var(--deep))",
            border: "none", color: "#fff", borderRadius: 12,
            fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1rem",
            cursor: "pointer", letterSpacing: "-.01em", transition: "all .25s",
            boxShadow: "0 6px 24px rgba(14,165,233,.35)",
          }}
            onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-2px)"); (e.currentTarget.style.boxShadow = "0 10px 32px rgba(14,165,233,.5)"); }}
            onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 6px 24px rgba(14,165,233,.35)"); }}
          >💧 Pesan Sekarang via WhatsApp</button>

          {sent && (
            <div style={{ marginTop: "1rem", textAlign: "center", padding: "1rem", color: "var(--sky2)", background: "rgba(14,165,233,.08)", border: "1px solid rgba(14,165,233,.2)", borderRadius: 10, fontSize: ".875rem", fontWeight: 600 }}>
              ✓ Mengarahkan ke WhatsApp...
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          #pesan > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #pesan > div > div:last-child > div:nth-child(3),
          #pesan > div > div:last-child > div:nth-child(5) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ borderTop: "1px solid rgba(14,165,233,.1)", background: "#F8FAFC", padding: "4rem 5% 2rem" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(14,165,233,.1)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: "1.25rem" }}>
              <svg viewBox="0 0 36 36" fill="none" width="32" height="32">
                <path d="M18 4 C18 4 8 16 8 22 a10 10 0 0 0 20 0 C28 16 18 4 18 4Z" fill="url(#dg2)"/>
                <defs><linearGradient id="dg2" x1="8" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38BDF8"/><stop offset="1" stopColor="#0369A1"/></linearGradient></defs>
              </svg>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-.03em" }}>
                mitra<span style={{ color: "var(--sky)" }}>qua</span>
              </span>
            </div>
            <p style={{ color: "rgba(15,23,42,.5)", fontSize: ".875rem", lineHeight: 1.8, maxWidth: 300, marginBottom: "1.5rem" }}>
              Depot air galon isi ulang terpercaya di Pontianak. Air bersih, harga hemat, untuk kesehatan keluarga Anda setiap hari.
            </p>
            <a href="https://wa.me/6281234567892" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#25D366", color: "#fff", padding: ".55rem 1.25rem", borderRadius: 100, fontSize: ".82rem", fontWeight: 700, textDecoration: "none" }}>
              💬 WA Order
            </a>
          </div>
          {[
            { title: "Navigasi", links: [["#proses","Proses Filtrasi"],["#harga","Harga & Paket"],["#keunggulan","Keunggulan"],["#ulasan","Ulasan"],["#pesan","Pesan Sekarang"]] },
            { title: "Informasi", links: [["#harga","Satuan Rp 6.000"],["#harga","Paket 10 Galon"],["#harga","Langganan Bulanan"],["#pesan","Antar ke Rumah"],["#pesan","Area Pengiriman"]] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(15,23,42,.4)", marginBottom: "1.25rem" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <button onClick={() => go(href)} style={{ background: "none", border: "none", color: "rgba(15,23,42,.4)", fontSize: ".875rem", cursor: "pointer", fontFamily: "Outfit, sans-serif", padding: 0, transition: "color .2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--sky2)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(15,23,42,.4)")}
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(15,23,42,.45)", fontSize: ".8rem" }}>© 2025 Mitra Qua. Pontianak, Kalimantan Barat.</p>
          <div style={{ display: "flex", gap: ".5rem" }}>
            {["IG","FB","WA"].map(s => (
              <a key={s} href="#" style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: ".72rem", fontWeight: 700, textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sky)"; (e.currentTarget as HTMLElement).style.color = "var(--sky)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ footer > div > div:first-child{grid-template-columns:1fr!important;gap:2.5rem!important} }
      `}</style>
    </footer>
  );
}
