import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionLabel } from './About';
import { services } from '../data/portfolioData';

export default function Services() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="services" className="py-28 px-6" style={{ background: '#08080c' }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
        >
          <div className="text-center mb-16">
            <SectionLabel>Services & Pricing</SectionLabel>
            <h2
              className="text-white font-black mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Transparent pricing.
              <br />
              <span style={{ color: '#06b6d4' }}>No surprises.</span>
            </h2>
            <p className="text-zinc-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Every project is different. Pick the tier that fits your needs, or reach out and we'll figure
              out exactly what works for your budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.tier} service={service} index={i} />
            ))}
          </div>

          <p className="text-center text-zinc-600 text-xs mt-8">
            Not sure which tier fits? Just reach out — I'll help you figure it out.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-3xl border p-8 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? service.highlighted
            ? 'linear-gradient(145deg, rgba(6,182,212,0.18), rgba(8,145,178,0.12))'
            : 'rgba(255,255,255,0.04)'
          : service.highlighted
            ? 'linear-gradient(145deg, rgba(6,182,212,0.12), rgba(8,145,178,0.08))'
            : 'rgba(255,255,255,0.025)',
        borderColor: hovered ? 'rgba(6,182,212,0.6)' : service.highlighted ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 25px 80px rgba(0,0,0,0.5), 0 0 50px rgba(6,182,212,0.2)'
          : service.highlighted
            ? '0 0 40px rgba(6,182,212,0.15)'
            : 'none',
        transform: hovered ? 'translateY(-12px) scale(1.02)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 70%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      {service.highlighted && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full"
          style={{ background: '#06b6d4', color: '#001f2d' }}
        >
          <Zap size={10} fill="currentColor" />
          Most Popular
        </div>
      )}

      <div className="relative z-10 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          {service.tier}
        </span>
        <div className="flex items-end gap-2 mt-3">
          <span
            className="font-black transition-all duration-300"
            style={{ 
              fontSize: '2.75rem', 
              lineHeight: 1, 
              color: service.highlighted ? '#06b6d4' : '#fff',
              transform: hovered ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {service.price}
          </span>
          <span className="text-zinc-500 text-sm mb-1">{service.priceNote}</span>
        </div>
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">{service.description}</p>
      </div>

      <ul className="relative z-10 flex flex-col gap-3 flex-1 mb-8">
        {service.features.map((feat, i) => (
          <li 
            key={feat} 
            className="flex items-start gap-3 text-sm transition-all duration-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span
              className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
              style={{ 
                background: hovered ? 'rgba(6,182,212,0.25)' : 'rgba(6,182,212,0.15)',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              <Check size={9} style={{ color: '#06b6d4' }} strokeWidth={3} />
            </span>
            <span className="text-zinc-300">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
        style={
          service.highlighted
            ? { background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: '#fff', boxShadow: hovered ? '0 0 30px rgba(6,182,212,0.4)' : '0 0 20px rgba(6,182,212,0.2)' }
            : {
                background: hovered ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.06)',
                color: hovered ? '#06b6d4' : '#e2e8f0',
                border: `1px solid ${hovered ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.1)'}`,
              }
        }
      >
        Get Started
      </button>
    </div>
  );
}
