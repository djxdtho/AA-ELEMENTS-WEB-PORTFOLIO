import React, { useState } from 'react';
import { ExternalLink, Download, CheckCircle, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionLabel } from './About';
import { projects } from '../data/portfolioData';

export default function Portfolio() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="portfolio"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #0d1117 0%, #08080c 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
        >
          <div className="text-center mb-12">
            <SectionLabel>My Work</SectionLabel>
            <h2
              className="text-white font-black mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Selected
              <br />
              <span style={{ color: '#06b6d4' }}>projects.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  
  const projectLinks: { [key: string]: { url: string; isDownload?: boolean } } = {
    'FitTrack - Fitness App': { url: '/AA-ELEMENTS-WEB-PORTFOLIO/fittrack/index.html', isDownload: true },
    'KAY-FITS E-commerce': { url: 'https://djxdtho.github.io/Kayfits/' },
  };
  const linkConfig = projectLinks[project.title] || { url: '#' };

  const getBadge = () => {
    if ('status' in project && project.status === 'In Progress') {
      return (
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(251,191,36,0.9)',
            color: '#000',
          }}
        >
          <Clock size={12} />
          In Progress
        </div>
      );
    }
    if (linkConfig.isDownload) {
      return (
        <a
          href={linkConfig.url}
          className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
          style={{
            background: hovered ? '#06b6d4' : 'rgba(6,182,212,0.8)',
            color: '#001f2d',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Download size={12} />
          Download App
        </a>
      );
    }
    return (
      <div
        className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{
          background: 'rgba(34,197,94,0.9)',
          color: '#fff',
        }}
      >
        <CheckCircle size={12} />
        Finished
      </div>
    );
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500"
      style={{
        borderColor: hovered ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.1)',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'none',
        boxShadow: hovered ? '0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(6,182,212,0.15)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, transparent 30%, rgba(8,8,12,0.9) 100%)',
            opacity: hovered ? 1 : 0.6,
          }}
        />

        {getBadge()}

        <a
          href={linkConfig.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? '#06b6d4' : 'rgba(255,255,255,0.1)',
            transform: hovered ? 'scale(1)' : 'scale(0.8)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={12} style={{ color: '#fff' }} />
        </a>
      </div>

      <div className="p-5" style={{ background: 'rgba(8,8,12,0.95)' }}>
        <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#a1a1aa',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
