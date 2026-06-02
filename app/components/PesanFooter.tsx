"use client";
import { useState } from "react";

export function Pesan() {
  const [form, setForm] = useState({ nama: "", wa: "", alamat: "", paket: "", jumlah: "", catatan: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.nama || !form.wa) { alert("Mohon isi Nama dan WhatsApp!"); return; }
    const msg = encodeURIComponent(`Halo Mitra Qua! 💧\n\nSaya ingin pesan air galon:\n\nNama: *${form.nama}*\nWA: ${form.wa}\nAlamat: ${form.alamat || "-"}\nPaket: ${form.paket || "Satuan"}\nJumlah: ${form.jumlah || "1"} galon\nCatatan: ${form.catatan || "-"}\n\nMohon diproses. Terima kasih!`);
    setSent(true);
    setTimeout(() => window.open(`https://wa.me/6281234567892?text=${msg}`, "_blank"), 500);
  };

  const inp: React.CSSProperties = { width: "100%", background: "var(--bg2)", border: "1.5px solid var(--border2)", color: "var(--text)", padding: ".85rem 1.1rem", borderRadius: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: ".9rem", outline: "none", transition: "border-color .2s, background .2s" };
  const lbl: React.CSSProperties = { display: "block", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".45rem", fontWeight: 700 };

  return (
    <section id="pesan" style={{ padding: "7rem 5%", background: "var(--bg3)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "6rem", alignItems: "start" }}>

        {/* Left info */}
        <div className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--grad-main)", display: "inline-block" }} />
            <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--violet)", letterSpacing: ".14em", textTransform: "uppercase" }}>Pesan Sekarang</span>
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-.04em", lineHeight: .95, color: "var(--ink)", marginBottom: "1.5rem" }}>
            Air Bersih{" "}
            <span style={{ background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Langsung</span>{" "}
            ke Rumah Anda
          </h2>
          <p style={{ color: "var(--sub)", fontSize: ".95rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Isi form di samping atau langsung chat WhatsApp kami. Pesanan diproses dalam hitungan menit, antar hari yang sama untuk area Pontianak.
          </p>

          {/* Info items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "📍", label: "Lokasi Depot", val: "Jl. Sungai Raya No. 45, Pontianak", grad: "var(--grad-main)" },
              { icon: "📞", label: "WhatsApp Order", val: "+62 812-3456-7892", grad: "var(--grad-cool)" },
              { icon: "🕐", label: "Jam Operasional", val: "Setiap Hari 07.00 – 21.00 WIB", grad: "var(--grad-royal)" },
              { icon: "🚚", label: "Jangkauan Antar", val: "Radius 5 km dari depot", grad: "var(--grad-warm)" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: ".85rem", alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 11, background: item.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", boxShadow: "0 4px 14px rgba(99,88,229,.15)" }}>{item.icon}</div>
                <div>
                  <div style={{ color: "var(--muted)", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: ".9rem", color: "var(--text)", marginTop: ".2rem" }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/6281234567892?text=Halo%20Mitra%20Qua%20saya%20mau%20pesan%20galon" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", background: "#25D366", color: "#fff", padding: ".9rem 1.75rem", borderRadius: 100, fontWeight: 700, fontSize: ".9rem", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,211,102,.3)", transition: "all .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(37,211,102,.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,211,102,.3)"; }}
          >💬 Chat WhatsApp Langsung</a>
        </div>

        {/* Form */}
        <div className="reveal" style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 24, padding: "2.5rem", boxShadow: "var(--shadow2)" }}>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "var(--ink)", letterSpacing: "-.03em", marginBottom: ".4rem" }}>Form Pemesanan</h3>
          <p style={{ color: "var(--muted)", fontSize: ".82rem", marginBottom: "2rem" }}>Isi data Anda — kami konfirmasi via WhatsApp</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            {[{ label: "Nama Lengkap", id: "nama", ph: "Nama Anda" }, { label: "No. WhatsApp", id: "wa", ph: "08xx-xxxx-xxxx" }].map(f => (
              <div key={f.id}>
                <label style={lbl}>{f.label}</label>
                <input style={inp} placeholder={f.ph} value={form[f.id as keyof typeof form]} onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--violet)"; e.currentTarget.style.background = "rgba(99,88,229,.03)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--bg2)"; }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={lbl}>Alamat Pengiriman</label>
            <input style={inp} placeholder="Alamat lengkap (jika ingin diantar)" value={form.alamat} onChange={e => setForm({ ...form, alamat: e.target.value })}
              onFocus={e => { e.currentTarget.style.borderColor = "var(--violet)"; e.currentTarget.style.background = "rgba(99,88,229,.03)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--bg2)"; }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={lbl}>Paket</label>
              <select style={{ ...inp, cursor: "pointer" }} value={form.paket} onChange={e => setForm({ ...form, paket: e.target.value })}>
                <option value="">Satuan (Rp 6.000)</option>
                <option>Paket 10 Galon (Rp 55.000)</option>
                <option>Langganan Bulanan</option>
              </select>
            </div>
            <div>
              <label style={lbl}>Jumlah Galon</label>
              <input style={inp} type="number" placeholder="1" min="1" value={form.jumlah} onChange={e => setForm({ ...form, jumlah: e.target.value })}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--violet)"; e.currentTarget.style.background = "rgba(99,88,229,.03)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--bg2)"; }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={lbl}>Catatan (Opsional)</label>
            <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} placeholder="Catatan tambahan untuk kurir..." value={form.catatan} onChange={e => setForm({ ...form, catatan: e.target.value })}
              onFocus={e => { e.currentTarget.style.borderColor = "var(--violet)"; e.currentTarget.style.background = "rgba(99,88,229,.03)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--bg2)"; }}
            />
          </div>

          <button onClick={submit} style={{ width: "100%", padding: "1rem", background: "var(--grad-main)", border: "none", color: "#fff", borderRadius: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "1rem", cursor: "pointer", transition: "all .25s", boxShadow: "0 8px 24px rgba(99,88,229,.28)" }}
            onMouseEnter={e => { (e.currentTarget.style.transform = "translateY(-2px)"); (e.currentTarget.style.boxShadow = "0 14px 36px rgba(99,88,229,.4)"); }}
            onMouseLeave={e => { (e.currentTarget.style.transform = "none"); (e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,88,229,.28)"); }}
          >💧 Pesan Sekarang via WhatsApp</button>

          {sent && (
            <div style={{ marginTop: "1rem", textAlign: "center", padding: "1rem", color: "#059669", background: "rgba(16,185,129,.08)", border: "1px solid rgba(16,185,129,.2)", borderRadius: 10, fontSize: ".875rem", fontWeight: 600 }}>
              ✓ Mengarahkan ke WhatsApp...
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:900px){#pesan>div{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  );
}

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ background: "var(--ink)", padding: "4rem 5% 2rem" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".65rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 2C12 2 5 10 5 14.5a7 7 0 0014 0C19 10 12 2 12 2Z" fill="white"/></svg>
              </div>
              <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", letterSpacing: "-.03em" }}>
                Mitra<span style={{ background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Qua</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".875rem", lineHeight: 1.8, maxWidth: 280, marginBottom: "1.5rem" }}>
              Depot air galon isi ulang terpercaya di Pontianak. Air bersih, harga hemat, untuk kesehatan keluarga Anda setiap hari.
            </p>
            <a href="https://wa.me/6281234567892" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#25D366", color: "#fff", padding: ".55rem 1.25rem", borderRadius: 100, fontSize: ".82rem", fontWeight: 700, textDecoration: "none" }}>💬 WA Order</a>
          </div>
          {[
            { title: "Navigasi", links: [["#proses","Proses Filtrasi"],["#harga","Harga & Paket"],["#keunggulan","Keunggulan"],["#ulasan","Ulasan"],["#pesan","Pesan Sekarang"]] },
            { title: "Informasi", links: [["#harga","Satuan Rp 6.000"],["#harga","Paket 10 Galon"],["#harga","Langganan Bulanan"],["#pesan","Antar ke Rumah"],["#pesan","Area Pengiriman"]] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: "1.25rem" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <button onClick={() => go(href)} style={{ background: "none", border: "none", color: "rgba(255,255,255,.35)", fontSize: ".875rem", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", padding: 0, transition: "color .2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,.25)", fontSize: ".8rem" }}>© 2025 Mitra Qua. Pontianak, Kalimantan Barat.</p>
          <div style={{ display: "flex", gap: ".5rem" }}>
            {["IG","FB","WA"].map(s => (
              <a key={s} href="#" style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.3)", fontSize: ".72rem", fontWeight: 700, textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--violet)"; (e.currentTarget as HTMLElement).style.color = "var(--violet2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.3)"; }}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){footer>div>div:first-child{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
    </footer>
  );
}
