import { useCounter } from '../hooks/useCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { target: 5, suffix: '', label: 'Projects Completed', icon: 'fas fa-code-branch' },
  { target: 1,  suffix: '+', label: 'Years Experience',   icon: 'fas fa-calendar-alt' },
  { target: 10, suffix: '+', label: 'Technologies Used',  icon: 'fas fa-layer-group' },
  { target: 100, suffix: '%', label: 'Dedication', icon: 'fas fa-star' },
];

function StatItem({ target, suffix, label, icon }: typeof STATS[0]) {
  const { count, ref } = useCounter(target, 2200);

  return (
    <div ref={ref} className="stat-card">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mx-auto mb-4"
        style={{
          background: 'linear-gradient(135deg, rgba(0,245,255,0.12), rgba(176,0,255,0.12))',
          border: '1px solid rgba(0,245,255,0.2)',
          color: 'var(--cyan)',
        }}
      >
        <i className={icon} />
      </div>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p
        className="text-sm mt-2"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20">
      <div className="neon-divider mx-6 mb-20" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal text-center mb-12">
          <span className="section-tag">By the Numbers</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <div className="neon-divider mx-6 mt-20" />
    </section>
  );
}
