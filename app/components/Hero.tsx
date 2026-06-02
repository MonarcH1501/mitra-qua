export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Soft gradient orbs — subtle on white */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 700, height: 700, top: "-20%", right: "-15%", background: "radial-gradient(circle, rgba(99,88,229,.07) 0%, transparent 65%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", width: 500, height: 500, bottom: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(10,189,227,.07) 0%, transparent 65%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", width: 350, height: 350, top: "35%", left: "38%", background: "radial-gradient(circle, rgba(244,63,138,.05) 0%, transparent 65%)", borderRadius: "50%" }} />
        {/* Very faint dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(99,88,229,.08) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div style={{ flex: 1, maxWidth: 1300, margin: "0 auto", width: "100%", padding: "0 5%", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "4rem", position: "relative", zIndex: 2, paddingTop: "7rem" }}>

        {/* LEFT */}
        <div>
          {/* Eyebrow pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", background: "linear-gradient(135deg,rgba(99,88,229,.08),rgba(10,189,227,.08))", border: "1px solid rgba(99,88,229,.15)", borderRadius: 100, padding: ".4rem 1.1rem .4rem .5rem", marginBottom: "2rem", animation: "fadeUp .6s ease both" }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", boxShadow: "0 2px 8px rgba(99,88,229,.3)" }}>💧</div>
            <span style={{ fontSize: ".78rem", fontWeight: 600, color: "var(--violet)", letterSpacing: ".04em" }}>Tersertifikasi BPOM · Filtrasi 7 Tahap</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,5.5vw,5.2rem)", lineHeight: .95, letterSpacing: "-.04em", marginBottom: "1.75rem", animation: "fadeUp .6s .1s ease both" }}>
            <span style={{ display: "block", color: "var(--ink)" }}>Air Bersih</span>
            <span style={{ display: "block", background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sehat & Hemat</span>
            <span style={{ display: "block", color: "var(--muted)", fontWeight: 700, fontSize: "80%" }}>untuk Keluarga</span>
          </h1>

          <p style={{ color: "var(--sub)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 430, marginBottom: "2.5rem", animation: "fadeUp .6s .2s ease both" }}>
            Isi ulang galon 20 liter cukup <strong style={{ color: "var(--violet)", fontWeight: 800 }}>Rp 6.000</strong> saja. Diproses dengan teknologi filtrasi modern — murni, segar, dan aman untuk diminum langsung.
          </p>

          {/* CTA Row */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem", animation: "fadeUp .6s .3s ease both" }}>
            <a href="#pesan" style={{ background: "var(--grad-main)", color: "#fff", padding: "1rem 2rem", borderRadius: 100, fontWeight: 700, textDecoration: "none", fontSize: ".95rem", boxShadow: "0 8px 28px rgba(99,88,229,.3)", transition: "all .25s", display: "inline-flex", alignItems: "center", gap: ".4rem" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(99,88,229,.42)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(99,88,229,.3)"; }}
            >Pesan Sekarang 💧</a>
            <a href="#proses" style={{ color: "var(--violet)", border: "1.5px solid rgba(99,88,229,.25)", padding: "1rem 2rem", borderRadius: 100, fontWeight: 600, textDecoration: "none", fontSize: ".95rem", transition: "all .25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--violet)"; (e.currentTarget as HTMLElement).style.background = "rgba(99,88,229,.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,88,229,.25)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >Lihat Proses →</a>
          </div>

          {/* Trust row */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", animation: "fadeUp .6s .4s ease both" }}>
            {[
              { icon: "🏆", label: "BPOM Certified" },
              { icon: "🧪", label: "Lab Tested Daily" },
              { icon: "⭐", label: "4.9 / 1200+ Ulasan" },
            ].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
                <span>{b.icon}</span>
                <span style={{ color: "var(--muted)", fontSize: ".78rem", fontWeight: 500 }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — hero visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Ripple rings */}
          {[1,2,3].map(i => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%", border: `1.5px solid rgba(99,88,229,${.1 / i})`, width: `${200 + i * 100}px`, height: `${200 + i * 100}px`, animation: `ripple ${2.5 + i * .7}s ease-out infinite ${i * .5}s` }} />
          ))}

          {/* Main card */}
          <div style={{ width: 300, height: 400, borderRadius: 28, background: "linear-gradient(160deg, rgba(99,88,229,.06) 0%, rgba(10,189,227,.04) 100%)", border: "1.5px solid rgba(99,88,229,.12)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", animation: "float 5s ease-in-out infinite", boxShadow: "0 24px 64px rgba(99,88,229,.1), inset 0 1px 0 rgba(255,255,255,.8)" }}>

            {/* Top shine */}
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg,transparent,rgba(99,88,229,.3),transparent)" }} />
            {/* Bottom water shimmer */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(10,189,227,.07), transparent)" }} />
            <div style={{ position: "absolute", bottom: "28%", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(10,189,227,.25),transparent)" }} />

            {/* Drop icon */}
            <div style={{ fontSize: "7rem", marginBottom: ".75rem", filter: "drop-shadow(0 8px 20px rgba(99,88,229,.2))", animation: "float 4s ease-in-out infinite .5s" }}>💧</div>

            {/* Price pill */}
            <div style={{ background: "var(--grad-main)", borderRadius: 18, padding: "1.1rem 2rem", textAlign: "center", boxShadow: "0 8px 28px rgba(99,88,229,.35)", position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: ".68rem", fontWeight: 600, color: "rgba(255,255,255,.75)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: ".2rem" }}>Harga Isi Ulang</div>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "2.6rem", letterSpacing: "-.04em", lineHeight: 1, color: "#fff" }}>Rp 6.000</div>
              <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.75)", marginTop: ".3rem" }}>per galon 20 liter</div>
            </div>
          </div>

          {/* Floating chips */}
          <div style={{ position: "absolute", top: "6%", right: "0%", background: "#fff", border: "1.5px solid rgba(99,88,229,.12)", borderRadius: 14, padding: ".75rem 1.1rem", boxShadow: "0 8px 28px rgba(99,88,229,.1)", animation: "float 6s ease-in-out infinite 1s" }}>
            <div style={{ fontSize: ".65rem", color: "var(--muted)", marginBottom: ".2rem" }}>Pelanggan Aktif</div>
            <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.1rem", background: "var(--grad-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>1.200+</div>
          </div>
          <div style={{ position: "absolute", bottom: "10%", left: "0%", background: "#fff", border: "1.5px solid rgba(10,189,227,.15)", borderRadius: 14, padding: ".75rem 1.1rem", boxShadow: "0 8px 28px rgba(10,189,227,.1)", animation: "float 7s ease-in-out infinite .5s" }}>
            <div style={{ fontSize: ".65rem", color: "var(--muted)", marginBottom: ".2rem" }}>Buka Setiap Hari</div>
            <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--emerald)" }}>07.00 – 21.00</div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--border)", background: "rgba(255,255,255,.7)", backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 5%", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            { n: "Rp 6.000", l: "per Galon 20L", grad: "var(--grad-main)" },
            { n: "7 Tahap", l: "Proses Filtrasi", grad: "var(--grad-cool)" },
            { n: "1.200+", l: "Pelanggan Aktif", grad: "var(--grad-royal)" },
            { n: "4.9 ⭐", l: "Rating Kepuasan", grad: "var(--grad-warm)" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "1.5rem 1.5rem", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 900, fontSize: "1.6rem", letterSpacing: "-.04em", background: s.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.n}</div>
              <div style={{ color: "var(--muted)", fontSize: ".75rem", marginTop: ".25rem", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #home > div:nth-child(2){grid-template-columns:1fr!important;padding-top:8rem!important}
          #home > div:nth-child(2) > div:last-child{display:none!important}
          #home > div:last-child > div{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </section>
  );
}
