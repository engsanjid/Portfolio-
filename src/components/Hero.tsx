import { useState, useEffect } from 'react';
import LiveClock from './LiveClock';

const TERMINAL_LINES = [
  { delay: 400,  type: 'prompt',  content: 'whoami' },
  { delay: 900,  type: 'output',  content: 'Md Sanjid Islam' },
  { delay: 1300, type: 'prompt',  content: 'cat skills.txt' },
  { delay: 1800, type: 'green',   content: '✓ Next.js ✓React ✓ Node.js  ✓ MongoDB  ✓ Firebase' },
  { delay: 2200, type: 'prompt',  content: 'echo $STATUS' },
  { delay: 2700, type: 'yellow',  content: 'Seeking Full Stack Developer role' },
  { delay: 3100, type: 'prompt',  content: 'git log --oneline -1' },
  { delay: 3600, type: 'output',  content: 'a3f91bc — Building Modern web with MERN stack' },
];

type LineType = 'prompt' | 'output' | 'green' | 'yellow';

interface TermLine {
  delay: number;
  type: LineType;
  content: string;
}

function TerminalLine({ line, index }: { line: TermLine; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), line.delay + index * 10);
    return () => clearTimeout(timer);
  }, [line.delay, index]);

  if (!visible) return null;

  const colorMap: Record<LineType, string> = {
    prompt: 'terminal-prompt',
    output: 'terminal-output',
    green:  'terminal-green',
    yellow: 'terminal-yellow',
  };

  return (
    <div className="terminal-line text-sm">
      {line.type === 'prompt' ? (
        <span>
          <span className="terminal-prompt">sanjid@portfolio</span>
          <span style={{ color: 'var(--text-secondary)' }}>:~$ </span>
          <span className="terminal-cmd">{line.content}</span>
        </span>
      ) : (
        <span className={colorMap[line.type]}>&nbsp;&nbsp;{line.content}</span>
      )}
    </div>
  );
}

export default function Hero() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCursor(true), 4200);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: '80px' }}
    >
     <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
        <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left w-full">

            {/* Status + Clock */}
            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <div className="status-badge">
                <span className="status-dot" />
                Available for Work
              </div>
              <LiveClock />
            </div>

            {/* Name block */}
            <div className="text-center lg:text-left">
              <p
                className="font-mono text-sm tracking-widest mb-3"
                style={{ color: 'var(--cyan-dim)', fontFamily: 'var(--font-mono)' }}
              >
                &lt; Hello, World! /&gt;
              </p>

              <h1
                className="glitch text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-2"
                data-text="SANJID"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
              >
                SANJID
              </h1>

              <h2
                className="text-xl md:text-2xl font-medium mt-3 text-center lg:text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Full Stack Developer
                <span
                  className="ml-2 px-2 py-0.5 rounded text-sm"
                  style={{
                    color: 'var(--purple)',
                    background: 'rgba(176,0,255,0.1)',
                    border: '1px solid rgba(176,0,255,0.3)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  &amp; CSE Student
                </span>
              </h2>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0" style={{ color: 'var(--text-secondary)' }}>
              Seeking a Full Stack Developer role to build{' '}
              <span style={{ color: 'var(--cyan)' }}>modern web applications</span> using Next.js, React, Node.js,
              and MongoDB while growing within a collaborative team from{' '}
              <span style={{ color: 'var(--teal)' }}>Dhaka, Bangladesh</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <i className="fas fa-code" />
                View Projects
              </button>
              <button
                className="btn-ghost"
                onClick={() => scrollToSection('contact')}
              >
                <i className="fas fa-envelope" />
                Contact Me
              </button>
              <a
                href="https://github.com/engsanjid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <i className="fab fa-github" />
                GitHub
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
              {[
                { icon: 'fab fa-github', href: 'https://github.com/engsanjid', label: 'GitHub' },
                { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/md-sanjid-islam/', label: 'LinkedIn' },
                { icon: 'fas fa-envelope', href: 'mailto:mdsanjidi36@gmail.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                  style={{
                    border: '1px solid rgba(0,245,255,0.2)',
                    background: 'rgba(0,245,255,0.04)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--cyan)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,245,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.2)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  aria-label={s.label}
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column: Terminal ── */}
          <div className="terminal-window w-full">
            <div className="terminal-header">
              <span className="terminal-dot" style={{ background: '#ff5f57' }} />
              <span className="terminal-dot" style={{ background: '#febc2e' }} />
              <span className="terminal-dot" style={{ background: '#28c840' }} />
              <span
                className="ml-3 text-xs"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
              >
                sanjid@portfolio ~ terminal
              </span>
            </div>
            <div className="terminal-body space-y-1">
              {TERMINAL_LINES.map((line, i) => (
                <TerminalLine key={i} line={line as TermLine} index={i} />
              ))}
              {showCursor && (
                <div className="terminal-line text-sm">
                  <span className="terminal-prompt">sanjid@portfolio</span>
                  <span style={{ color: 'var(--text-secondary)' }}>:~$ </span>
                  <span className="cursor-blink" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <p className="text-xs tracking-widest" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            SCROLL
          </p>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, var(--cyan), transparent)',
              animation: 'float-orb 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}