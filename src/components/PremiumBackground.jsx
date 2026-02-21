export default function PremiumBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] opacity-[0.05] text-primary"
        style={{ transform: "rotate(15deg)" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {[...Array(24)].map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="45"
              ry="15"
              stroke="currentColor"
              strokeWidth="0.2"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="absolute -top-64 -left-32 w-[800px] h-[800px] bg-primary/5 rounded-full mix-blend-multiply blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-accent-blue/4 rounded-full mix-blend-multiply blur-[120px] animate-blob-delay-2" />
      <div className="absolute -bottom-40 left-[20%] w-[700px] h-[700px] bg-accent-purple/3 rounded-full mix-blend-multiply blur-[120px] animate-blob-delay-4" />
    </div>
  );
}
