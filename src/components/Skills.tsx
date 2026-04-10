import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionLabel } from './About';
import { skills } from '../data/portfolioData';

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Tailwind CSS', 'Figma', 'Supabase', 'Git', 'Node.js', 'Vite',
];

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #0d1117 0%, #08080c 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
        >
          <SectionLabel>Skills & Tools</SectionLabel>

          <div className="grid md:grid-cols-2 gap-16 mt-12">
            <div>
              <h2
                className="text-white font-black mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Proficiency
                <br />
                <span style={{ color: '#06b6d4' }}>breakdown.</span>
              </h2>

              <div className="flex flex-col gap-5">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-semibold" style={{ color: '#06b6d4' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          background: 'linear-gradient(90deg, #06b6d4, #38bdf8)',
                          transitionDelay: `${i * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                className="text-white font-black mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Tech
                <br />
                <span style={{ color: '#06b6d4' }}>stack.</span>
              </h2>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      color: '#e2e8f0',
                      borderColor: 'rgba(6,182,212,0.25)',
                      background: 'rgba(6,182,212,0.06)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="mt-12 p-6 rounded-2xl border"
                style={{
                  background: 'rgba(6,182,212,0.05)',
                  borderColor: 'rgba(6,182,212,0.2)',
                }}
              >
                <p className="text-zinc-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Always learning.</span> I actively keep up with
                  modern web standards, best practices, and emerging tools — so your project benefits from
                  current, future-proof technology choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
