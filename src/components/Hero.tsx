import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const roles = ['Web Designer', 'Frontend Developer', 'Brand Builder', 'UI Craftsman'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #08080c 0%, #0d1117 50%, #080810 100%)' }}
    >
      <GridPattern />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 border"
          style={{
            color: '#06b6d4',
            borderColor: 'rgba(6,182,212,0.3)',
            background: 'rgba(6,182,212,0.08)',
          }}
        >
          <Sparkles size={12} />
          Available for new projects
        </div>

        <h1
          className="font-black text-white mb-4"
          style={{
            fontSize: 'clamp(3rem, 9vw, 7.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          Abdurrahman
          <br />
          <span
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.15)',
              color: 'transparent',
            }}
          >
            Ali
          </span>
        </h1>

        <div
          className="text-center mb-6"
          style={{ height: '2.5rem' }}
        >
          <span
            className="font-semibold text-2xl md:text-3xl transition-all duration-300"
            style={{
              color: '#06b6d4',
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(8px)',
              display: 'inline-block',
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        <p
          className="text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: '1.1rem' }}
        >
          17-year-old self-taught designer and developer crafting websites that
          help brands and small businesses make a lasting impression online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              boxShadow: '0 0 30px rgba(6,182,212,0.35)',
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 border"
            style={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-12">
          {[['2', 'Projects Completed'], ['1', 'Brands Served'], ['100%', 'Client Satisfaction']].map(
            ([num, label]) => (
              <div key={label} className="text-center">
                <div
                  className="font-black text-3xl"
                  style={{ color: '#06b6d4' }}
                >
                  {num}
                </div>
                <div className="text-zinc-500 text-xs mt-1 font-medium">{label}</div>
              </div>
            )
          )}
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </button>

      <GlowOrb top="10%" left="5%" size={500} opacity={0.06} />
      <GlowOrb top="60%" left="80%" size={400} opacity={0.05} />
    </section>
  );
}

function GridPattern() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}

function GlowOrb({ top, left, size, opacity }: { top: string; left: string; size: number; opacity: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
        opacity,
        filter: 'blur(40px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
