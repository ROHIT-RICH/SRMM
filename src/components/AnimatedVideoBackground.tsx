export function AnimatedVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback gradient for devices that can't play video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b1a] via-[#0a1e3a] to-[#050816]" />
      
      {/* Animated gradient overlay as video alternative */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#050816]/40" />
      
      {/* Animated background elements */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 229, 255, 0.03) 2px,
              rgba(0, 229, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(37, 99, 255, 0.03) 2px,
              rgba(37, 99, 255, 0.03) 4px
            )
          `,
          animation: 'shift-bg 20s linear infinite',
        }}
      />
      
      {/* Animated moving waves */}
      <svg
        className="absolute inset-0 opacity-20"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        style={{ animation: 'wave-animation 8s ease-in-out infinite' }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 229, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(37, 99, 255, 0.1)" />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
          fill="url(#wave-gradient)"
          style={{
            filter: 'blur(2px)',
          }}
        />
        <path
          d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z"
          fill="rgba(0, 229, 255, 0.1)"
          style={{
            filter: 'blur(1px)',
            animation: 'wave-move 15s linear infinite',
          }}
        />
      </svg>

      <style>{`
        @keyframes shift-bg {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        
        @keyframes wave-animation {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(20px) scaleY(1.1); }
        }
        
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(1200px); }
        }
      `}</style>
    </div>
  );
}
