export default function OrbitGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]" data-testid="orbit-graphic">
      <svg viewBox="0 0 600 480" className="h-auto w-full" overflow="visible">
        <defs>
          <radialGradient id="circleGrad" cx="0.3" cy="0.25" r="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#D0CEF8" />
            <stop offset="100%" stopColor="#A8A6E8" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0EFFF" />
            <stop offset="100%" stopColor="#B8B6E8" />
          </linearGradient>
          <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#D8D6FA" />
            <stop offset="100%" stopColor="#B8B6E8" />
          </linearGradient>
        </defs>

        <g className="orbit-a">
          <circle
            cx="300"
            cy="240"
            r="205"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="4"
            strokeDasharray="14 14"
          />
        </g>
        <g className="orbit-b">
          <circle
            cx="300"
            cy="240"
            r="148"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="4"
            strokeDasharray="14 14"
          />
        </g>

        <circle cx="300" cy="240" r="110" fill="url(#circleGrad)" />

        <path
          d="M300 168 a72 72 0 1 1 -51 21"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="11"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path d="M300 240 L339 201" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
        <circle cx="300" cy="240" r="7.5" fill="#FFFFFF" />

        <path
          d="M95 108 C96.5 121 100 124.5 113 126 C100 127.5 96.5 131 95 144 C93.5 131 90 127.5 77 126 C90 124.5 93.5 121 95 108 Z"
          fill="url(#starGrad)"
        />
        <path
          d="M525 150 C526.5 165 530.5 169 545 170.5 C530.5 172 526.5 176 525 191 C523.5 176 519.5 172 505 170.5 C519.5 169 523.5 165 525 150 Z"
          fill="url(#starGrad)"
          opacity="0.9"
        />
        <path
          d="M255 420 C256 431 259 434 270 435 C259 436 256 439 255 450 C254 439 251 436 240 435 C251 434 254 431 255 420 Z"
          fill="url(#starGrad)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
