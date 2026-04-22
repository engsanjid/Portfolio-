import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Dhaka',
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
      style={{
        fontFamily: 'var(--font-mono)',
        background: 'rgba(0,245,255,0.05)',
        border: '1px solid rgba(0,245,255,0.15)',
        color: 'var(--cyan-dim)',
      }}
    >
      <i className="fas fa-clock text-xs" style={{ color: 'var(--cyan)' }} />
      <span>DHK {time}</span>
    </div>
  );
}
