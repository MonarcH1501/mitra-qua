export default function Ticker() {
  const items = ["💧 Air Bersih","🧪 Filtrasi 7 Tahap","✅ BPOM Certified","🚚 Antar ke Rumah","⚡ Proses 5 Menit","💰 Rp 6.000/Galon","🏆 Sejak 2018","⭐ Rating 4.9"];
  const all = [...items,...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg2)", padding: ".7rem 0" }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "ticker 22s linear infinite", gap: "2.5rem" }}>
        {[...all,...all].map((item, i) => (
          <span key={i} style={{ fontSize: ".8rem", fontWeight: 600, color: "var(--sub)", letterSpacing: ".04em" }}>
            {item} <span style={{ color: "var(--border2)", marginLeft: ".5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
