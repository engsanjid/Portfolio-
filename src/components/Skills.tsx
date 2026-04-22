import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SKILLS = [
  { name: 'React.js',          pct: 90, color: '#61dafb', icon: 'fab fa-react' },
  { name: 'Next.js',           pct: 85, color: '#00ffcc', icon: 'fas fa-bolt' },
  { name: 'Node.js',           pct: 80, color: '#68a063', icon: 'fab fa-node-js' },
  { name: 'Express.js',        pct: 75, color: '#000000', icon: 'fas fa-server' },
  { name: 'MongoDB',           pct: 78, color: '#47a248', icon: 'fas fa-database' },
  { name: 'Firebase',          pct: 82, color: '#ffca28', icon: 'fas fa-fire' },
  { name: 'JavaScript (ES6+)', pct: 88, color: '#f7df1e', icon: 'fab fa-js' },
  { name: 'HTML/CSS',          pct: 92, color: '#e34f26', icon: 'fab fa-html5' },
];

interface BarProps {
  pct: number;
  color: string;
}

function SkillBar({ pct, color }: BarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setWidth(pct), 200);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="skill-bar-track" style={{ height: '6px' }}>
      <div
        className="skill-bar-fill"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 10px ${color}66`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(176,0,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={headingRef} className="reveal text-center mb-16">
          <span className="section-tag">02 — Expertise</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="neon-divider max-w-xs mx-auto mt-4" />
          <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Technologies I've been working with recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  skill: typeof SKILLS[0];
  delay: number;
}

function SkillItem({ skill, delay }: SkillItemProps) {
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
      className="reveal glass-card p-5 space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm"
            style={{
              background: `${skill.color}14`,
              border: `1px solid ${skill.color}33`,
              color: skill.color,
            }}
          >
            <i className={skill.icon} />
          </div>
          <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
            {skill.name}
          </span>
        </div>
        <span
          className="text-sm font-bold"
          style={{ color: skill.color, fontFamily: 'var(--font-mono)' }}
        >
          {skill.pct}%
        </span>
      </div>
      <SkillBar pct={skill.pct} color={skill.color} />
    </div>
  );
}
