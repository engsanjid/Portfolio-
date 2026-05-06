import { useScrollReveal } from '../hooks/useScrollReveal';

const INFO_ITEMS = [
  { icon: 'fas fa-graduation-cap', label: 'Education',   value: 'BSc in CSE — Dhaka International University | 2024–Present', href: null },
  { icon: 'fas fa-map-marker-alt', label: 'Location',    value: 'Dhaka, Bangladesh', href: null },
  { icon: 'fas fa-phone',          label: 'Phone',       value: '+8801745532902', href: 'tel:+8801745532902' },
  { icon: 'fas fa-envelope',       label: 'Email',       value: 'mdsanjidi36@gmail.com', href: 'mailto:mdsanjidi36@gmail.com' },
  { icon: 'fab fa-github',         label: 'GitHub',      value: 'github.com/engsanjid', href: 'https://github.com/engsanjid' },
  { icon: 'fab fa-linkedin',       label: 'LinkedIn',    value: 'linkedin.com/in/md-sanjid-islam/', href: 'https://linkedin.com/in/md-sanjid-islam/' },
];

export default function About() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const leftRef    = useScrollReveal<HTMLDivElement>();
  const rightRef   = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal text-center mb-16">
          <span className="section-tag">01 — About Me</span>
          <h2 className="section-title mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="neon-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={leftRef} className="reveal-left glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(176,0,255,0.15))',
                  border: '1px solid rgba(0,245,255,0.25)',
                  color: 'var(--cyan)',
                }}
              >
                <i className="fas fa-user-astronaut" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                 Md Sanjid Islam
                </h3>
                <p className="text-sm" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
                  Full Stack Developer
                </p>
              </div>
            </div>

          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
  Seeking a Full Stack Developer role to build{' '}
  <span style={{ color: 'var(--cyan)' }}>modern web applications</span> using React, Next.js, Node.js,
  MongoDB, Firebase, and Tailwind CSS.
</p>
       <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
  I've developed projects like <span style={{ color: 'var(--teal)' }}>HomeNest</span> (a full-stack real estate platform with Next.js, Node.js, and MongoDB)
  and <span style={{ color: 'var(--teal)' }}>GameHub</span> (an indie game library with React and Firebase), showcasing my skills in
  React, Next.js, Node.js, MongoDB, and Firebase.
</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'GitHub', 'VS Code', 'Netlify', 'Vercel'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

        <a
  href="/Resume Sanjid.pdf"
  download
  className="btn-primary inline-flex w-fit mt-2"
>
  <i className="fas fa-download" />
  Download CV
</a>
</div>
          <div ref={rightRef} className="reveal-right space-y-3">
            {INFO_ITEMS.map((item) => {
              const content = (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(10,10,28,0.5)',
                    border: '1px solid rgba(0,245,255,0.08)',
                    cursor: item.href ? 'pointer' : 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.3)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,28,0.5)';
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background: 'rgba(0,245,255,0.08)',
                      color: 'var(--cyan)',
                      border: '1px solid rgba(0,245,255,0.15)',
                    }}
                  >
                    <i className={item.icon} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs mb-0.5 tracking-wider uppercase"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium text-wrap break-words "
                      style={{ color: item.href ? 'var(--cyan)' : 'var(--text-primary)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}