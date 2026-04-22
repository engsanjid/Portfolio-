import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  {
    number: '01',
    title: 'HomeNest — Full-Stack Real Estate Platform',
    description:
      'Built a real estate platform with property browsing, search, filter, and review features. Implemented secure authentication (Email/Password + Google) with protected routes and full CRUD for property owners. Added ratings & reviews system with a dedicated "My Ratings" dashboard and dynamic featured listings. Developed REST APIs with Node.js, Express & MongoDB, plus a responsive UI with dark/light mode and custom alerts.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    icon: 'fas fa-home',
    accent: '#00f5ff',
    links: {
      demo: 'https://home-nest-beta.vercel.app/',
      code: 'https://github.com/engsanjid/HomeNest',
    },
  },
  {
    number: '02',
    title: 'GameHub — Online Indie Game Library',
    description:
      'Built an indie game browsing platform with detailed game information and categories. Implemented secure Firebase Authentication (Email/Password + Google) with protected routes. Added profile update & password reset features with responsive UI using Tailwind CSS. Integrated Framer Motion animations and deployed securely with environment variables on Netlify/Firebase.',
    tags: ['React.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    icon: 'fas fa-gamepad',
    accent: '#b000ff',
    links: {
      demo: 'https://cool-salmiakki-fd45d4.netlify.app/',
      code: 'https://github.com/engsanjid/GameHub',
    },
  },
];

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accent: string;
  links: { demo: string; code: string };
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal project-card p-6 flex flex-col gap-4"
      style={{ position: 'relative', zIndex: 10 }} // ✅ FIX
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-base flex-shrink-0"
            style={{
              background: `${project.accent}14`,
              border: `1px solid ${project.accent}33`,
              color: project.accent,
            }}
          >
            <i className={project.icon} />
          </div>

          <div>
            <span
              className="text-xs font-bold tracking-widest block mb-0.5"
              style={{ color: project.accent }}
            >
              {project.number}
            </span>

            <h3 className="text-base font-bold">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex gap-2">
          {/* 🔥 DEMO BUTTON */}
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200"
            style={{
              border: `1px solid ${project.accent}33`,
              color: project.accent,
              background: `${project.accent}08`,
              position: 'relative',
              zIndex: 20,
              pointerEvents: 'auto',
            }}
            title="Live Demo"
          >
            <i className="fas fa-external-link-alt" />
          </a>

          {/* 🔥 GITHUB BUTTON */}
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-secondary)',
              background: 'rgba(255,255,255,0.03)',
              position: 'relative',
              zIndex: 20,
              pointerEvents: 'auto',
            }}
            title="Source Code"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              background: `${project.accent}0a`,
              border: `1px solid ${project.accent}22`,
              color: project.accent,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* 🔥 BACKGROUND FIX */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 60%, rgba(0,245,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={headingRef} className="reveal text-center mb-16">
          <span className="section-tag">03 — Portfolio</span>
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            A selection of work that showcases my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}