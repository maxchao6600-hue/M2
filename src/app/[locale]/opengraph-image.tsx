import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(120deg, #2a0e08 0%, #120c09 48%, #3a160c 100%)",
          color: "#f7f1e8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 18,
                background: "#fff",
                color: "#ff6b1a",
                fontSize: 54,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              M
            </div>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 18,
                background: "#ff6b1a",
                color: "#fff",
                fontSize: 54,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              2
            </div>
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>M2 Casino</div>
          <div style={{ marginTop: 18, fontSize: 28, color: "#ffe7a3" }}>
            Slots · Live tables · Player guides
          </div>
        </div>
        <div
          style={{
            width: 280,
            height: 360,
            borderRadius: 36,
            border: "8px solid #f0c14b",
            background: "#1a0d08",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
            padding: 24,
          }}
        >
          <div style={{ height: 54, borderRadius: 12, background: "#ff6b1a" }} />
          <div style={{ height: 54, borderRadius: 12, background: "#f0c14b" }} />
          <div style={{ height: 54, borderRadius: 12, background: "#fff1c9" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
