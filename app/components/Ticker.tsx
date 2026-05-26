export default function Ticker() {
  const items = ["💧 Air Bersih","🧪 7 Tahap Filtrasi","✅ BPOM Certified","🚚 Antar ke Rumah","⚡ Proses Cepat","💰 Rp 6.000/galon","🏆 Terpercaya Sejak 2018","💧 Air Bersih","🧪 7 Tahap Filtrasi","✅ BPOM Certified","🚚 Antar ke Rumah","⚡ Proses Cepat","💰 Rp 6.000/galon","🏆 Terpercaya Sejak 2018"];
  return (
    <div style={{ background: "linear-gradient(90deg, var(--deep), var(--sky), var(--deep))", padding: ".75rem 0", overflow: "hidden" }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "ticker 20s linear infinite", gap: "2.5rem" }}>
        {[...items,...items].map((item, i) => (
          <span key={i} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", fontWeight: 600, letterSpacing: ".06em" }}>
            {item} <span style={{ color: "rgba(255,255,255,.3)", marginLeft: ".5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
