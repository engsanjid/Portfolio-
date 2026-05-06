export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-10" style={{ borderTop: '1px solid rgba(0,245,255,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="text-xl font-black tracking-widest"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
            >
              SANJID<span style={{ color: 'var(--purple)' }}>.</span>
            </span>
            <span style={{ color: 'rgba(136,136,170,0.4)' }}>|</span>
            <span
              className="text-xs tracking-widest"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              Full Stack Developer
            </span>
          </div>

          <p
            className="text-xs text-center"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
          >
            &copy; {year} Md Sanjid Islam — Built with{' '}
            <span style={{ color: 'var(--cyan)' }}>Next.js</span> &amp;{' '}
            <span style={{ color: 'var(--purple)' }}>passion</span>
          </p>

          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all duration-300 hover-lift"
            style={{
              border: '1px solid rgba(0,245,255,0.2)',
              background: 'rgba(0,245,255,0.05)',
              color: 'var(--cyan)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,245,255,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}
