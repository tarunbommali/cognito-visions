export const CognitoLogo = ({ width = "100%", height = 50 }) => (
  <svg
    viewBox="0 0 220 60"
    width={width}
    height={height}
    preserveAspectRatio="xMinYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    {/* Define a single blue gradient */}
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>

    {/* Gradient title (Cognito Visions) */}
    <text
      x="0"
      y="25"
      style={{
        fontWeight: "bold",
        fontSize: "24px",
        fontFamily: "Segoe UI, sans-serif",
        fill: "url(#blueGradient)",
      }}
    >
      Cognito
    </text>
    <text
      x="95"
      y="25"
      style={{
        fontWeight: "bold",
        fontSize: "24px",
        fontFamily: "Segoe UI, sans-serif",
        fill: "url(#blueGradient)",
      }}
    >
      Visions
    </text>

    {/* Subtitle remains solid color */}
    <text
      x="0"
      y="50"
      style={{
        fontSize: "14px",
        fontFamily: "Segoe UI, sans-serif",
        fill: "#3b3a41",
      }}
    >
      AI-Driven Software Engineering
    </text>
  </svg>
);
