type BadgeProps = {
  id: string;
  className?: string;
  spinning?: boolean;
};

/**
 * The "Heaven at Last" globe from the TLC logo, redrawn as a seal:
 * a blue world inside a ring of the fellowship's confession.
 */
export function Badge({ id, className, spinning = true }: BadgeProps) {
  const ring = `${id}-ring`;
  const sea = `${id}-sea`;

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Jesus is Lord. Heaven at last. Matthew 6:33"
    >
      <defs>
        <path id={ring} d="M120,120 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" />
        <radialGradient id={sea} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#4f8fe0" />
          <stop offset="60%" stopColor="#0d4fb0" />
          <stop offset="100%" stopColor="#013280" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="120" r="118" fill="#ffffff" />
      <circle cx="120" cy="120" r="114" fill="none" stroke="#e73023" strokeWidth="2.5" />

      <g className={spinning ? "spin-slow origin-center [transform-box:fill-box]" : undefined}>
        <text
          fill="#013280"
          fontSize="17"
          fontWeight="800"
          letterSpacing="3.2"
          style={{ fontVariationSettings: '"wdth" 75, "opsz" 24' }}
        >
          <textPath href={`#${ring}`} startOffset="0">
            JESUS IS LORD ✚ HEAVEN AT LAST ✚ MATTHEW 6:33 ✚
          </textPath>
        </text>
      </g>

      <circle cx="120" cy="120" r="74" fill={`url(#${sea})`} />
      {/* continents, loosely */}
      <path
        d="M78 92c10-14 28-20 40-14 6 3 4 10 12 12s16-4 20 4-6 14-14 16-6 10-14 12-18-6-22 2-12 10-20 4-10-20-2-36z"
        fill="#2ea35a"
        opacity="0.92"
      />
      <path
        d="M128 150c8-6 22-4 28 4s0 18-10 20-16-4-20-10 0-10 2-14z"
        fill="#2ea35a"
        opacity="0.92"
      />
      <ellipse cx="120" cy="120" rx="74" ry="26" fill="none" stroke="#ffffff" strokeOpacity="0.28" />
      <ellipse cx="120" cy="120" rx="30" ry="74" fill="none" stroke="#ffffff" strokeOpacity="0.28" />

      <text
        x="120"
        y="114"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="25"
        fontWeight="800"
        style={{ fontVariationSettings: '"wdth" 75, "opsz" 48' }}
      >
        HEAVEN
      </text>
      <text
        x="120"
        y="140"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="25"
        fontWeight="800"
        style={{ fontVariationSettings: '"wdth" 75, "opsz" 48' }}
      >
        AT LAST
      </text>
    </svg>
  );
}

/** Compact globe used as the site mark in the header and footer. */
export function GlobeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#ffffff" stroke="#e73023" strokeWidth="2" />
      <circle cx="24" cy="24" r="17" fill="#013280" />
      <path
        d="M14 20c3-4 8-6 11-4 2 1 1 3 4 3.5s4-1 5 1-2 4-4 4.5-2 3-4 3.5-5-2-6 .5-3 3-5 1-3-6-1-10z"
        fill="#2ea35a"
      />
      <ellipse cx="24" cy="24" rx="17" ry="6" fill="none" stroke="#fff" strokeOpacity=".35" />
      <ellipse cx="24" cy="24" rx="7" ry="17" fill="none" stroke="#fff" strokeOpacity=".35" />
    </svg>
  );
}
