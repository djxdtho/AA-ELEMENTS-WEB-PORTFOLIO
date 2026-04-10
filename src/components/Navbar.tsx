import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,12,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6,182,212,0.12)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-black text-xl tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          AA<span style={{ color: '#06b6d4' }}>.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            color: '#fff',
            boxShadow: '0 0 20px rgba(6,182,212,0.3)',
          }}
        >
          Hire Me
        </button>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(8,8,12,0.97)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="text-sm font-semibold px-5 py-2.5 rounded-full w-full mt-2"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: '#fff' }}
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
