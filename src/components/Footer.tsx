import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="border-t"
      style={{ background: '#06060a', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div
              className="font-black text-2xl text-white mb-2"
              style={{ letterSpacing: '-0.03em' }}
            >
              AA<span style={{ color: '#06b6d4' }}>.</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              17-year-old web designer & developer. Building digital experiences for brands and small
              businesses.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-5">
            <ul className="flex flex-wrap gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#71717a',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)';
                    (e.currentTarget as HTMLElement).style.color = '#06b6d4';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = '#71717a';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Abdurrahman Ali. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors group"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
