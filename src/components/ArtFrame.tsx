"use client";

const PALETTES = [
  ["#ff6b1a", "#7a1d08", "#f0c14b"],
  ["#f0c14b", "#6a3b08", "#fff1c2"],
  ["#e23b2f", "#4a0d12", "#ffd0a1"],
  ["#2fbf8a", "#0c3b2e", "#f0c14b"],
  ["#5aa7ff", "#10243f", "#ffe7a3"],
  ["#c084fc", "#2a1248", "#f0c14b"],
  ["#ff5d8f", "#4a1024", "#ffe7a3"],
  ["#f97316", "#3b1d08", "#fff7df"],
] as const;

type ArtFrameProps = {
  tone?: number;
  motif?: number;
  className?: string;
  label: string;
};

export function ArtFrame({ tone = 0, motif = 0, className = "", label }: ArtFrameProps) {
  const [a, b, c] = PALETTES[Math.abs(tone) % PALETTES.length];
  const kind = Math.abs(motif) % 6;
  const slug = Array.from(label).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const gid = `art-${tone}-${motif}-${slug}`;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 80% 10%, ${a}55, transparent 46%), linear-gradient(160deg, ${b}, #120d0a 70%)`,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 360 280" className="h-full w-full">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c} />
            <stop offset="1" stopColor={a} />
          </linearGradient>
        </defs>
        <rect width="360" height="280" fill={`url(#${gid})`} opacity="0.08" />
        <circle cx="290" cy="48" r="70" fill={a} opacity="0.25" />
        <circle cx="40" cy="230" r="80" fill={c} opacity="0.12" />
        {kind === 0 ? <Reels accent={c} hot={a} /> : null}
        {kind === 1 ? <Coins accent={c} hot={a} /> : null}
        {kind === 2 ? <Cards accent={c} hot={a} /> : null}
        {kind === 3 ? <Wheel accent={c} hot={a} /> : null}
        {kind === 4 ? <Fish accent={c} hot={a} /> : null}
        {kind === 5 ? <Crown accent={c} hot={a} /> : null}
      </svg>
    </div>
  );
}

function Reels({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      {[70, 150, 230].map((x) => (
        <g key={x}>
          <rect x={x} y="48" width="64" height="180" rx="16" fill="#1a120c" stroke={accent} strokeWidth="3" />
          <rect x={x + 8} y="78" width="48" height="36" rx="8" fill={hot} opacity="0.85" />
          <rect x={x + 8} y="122" width="48" height="36" rx="8" fill={accent} opacity="0.9" />
          <rect x={x + 8} y="166" width="48" height="36" rx="8" fill="#fff4d2" opacity="0.8" />
        </g>
      ))}
    </g>
  );
}

function Coins({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      {[
        [80, 150],
        [160, 110],
        [230, 168],
        [190, 200],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <ellipse cx={x} cy={y + 10} rx="46" ry="16" fill="#000" opacity="0.25" />
          <circle cx={x} cy={y} r="42" fill={hot} />
          <circle cx={x} cy={y} r="30" fill="none" stroke={accent} strokeWidth="4" />
          <text x={x} y={y + 8} textAnchor="middle" fontSize="22" fill="#1a0d06" fontFamily="Georgia, serif">
            M
          </text>
        </g>
      ))}
    </g>
  );
}

function Cards({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      <rect x="78" y="58" width="110" height="160" rx="14" fill="#fff8ee" transform="rotate(-12 130 140)" />
      <rect x="150" y="48" width="120" height="170" rx="14" fill={hot} stroke={accent} strokeWidth="4" />
      <text x="210" y="140" textAnchor="middle" fontSize="54" fill="#fff8ee" fontFamily="Georgia, serif">
        A
      </text>
      <circle cx="250" cy="78" r="10" fill={accent} />
    </g>
  );
}

function Wheel({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      <circle cx="180" cy="146" r="92" fill="#1a120c" stroke={accent} strokeWidth="8" />
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x="176"
          y="58"
          width="8"
          height="176"
          rx="4"
          fill={deg % 90 === 0 ? hot : accent}
          transform={`rotate(${deg} 180 146)`}
        />
      ))}
      <circle cx="180" cy="146" r="22" fill={accent} />
    </g>
  );
}

function Fish({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      <ellipse cx="168" cy="150" rx="90" ry="46" fill={hot} />
      <polygon points="250,150 310,110 310,190" fill={accent} />
      <circle cx="130" cy="140" r="8" fill="#1a0d06" />
      <path d="M70 150 C110 110 130 190 70 170" fill={accent} opacity="0.8" />
    </g>
  );
}

function Crown({ accent, hot }: { accent: string; hot: string }) {
  return (
    <g>
      <path d="M70 180 L90 90 L140 140 L180 70 L220 140 L270 90 L290 180 Z" fill={hot} stroke={accent} strokeWidth="4" />
      <rect x="78" y="180" width="204" height="28" rx="8" fill={accent} />
      <circle cx="180" cy="78" r="10" fill="#fff4d2" />
    </g>
  );
}
