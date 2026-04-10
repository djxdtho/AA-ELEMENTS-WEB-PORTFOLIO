import { Code2, GraduationCap, Zap, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const facts = [
  {
    icon: GraduationCap,
    title: 'Student & Self-Taught',
    description:
      'At 17, I taught myself web design and development from the ground up — no bootcamp, just relentless curiosity.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Capable',
    description:
      'From pixel-perfect frontends to functional backends, I build complete web experiences that actually work.',
  },
  {
    icon: Zap,
    title: 'Brand-Focused Approach',
    description:
      'I don\'t just build websites — I build digital identities that communicate what a brand is about.',
  },
  {
    icon: Heart,
    title: 'Passionate About Impact',
    description:
      'Small businesses deserve great websites too. I make that possible at accessible price points.',
  },
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 px-6" style={{ background: '#08080c' }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
        >
          <SectionLabel>About Me</SectionLabel>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
            <div>
              <h2
                className="text-white font-black mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Building the web
                <br />
                <span style={{ color: '#06b6d4' }}>one pixel at a time.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-5" style={{ fontSize: '1.05rem' }}>
                Hey, I'm Abdurrahman — a 17-year-old web designer and developer based in the real world, building
                for it digitally. What started as tinkering with HTML and CSS has grown into a genuine craft and
                a real service offering for brands and small businesses.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8" style={{ fontSize: '1.05rem' }}>
                I believe every business — no matter how small — deserves a web presence that looks professional,
                loads fast, and converts visitors. That's why I offer services at multiple price points without
                ever compromising on quality.
              </p>

              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: '#06b6d4' }}
              >
                See my services
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(6,182,212,0.12)' }}
                  >
                    <Icon size={18} style={{ color: '#06b6d4' }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8" style={{ background: '#06b6d4' }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#06b6d4' }}>
        {children}
      </span>
    </div>
  );
}
