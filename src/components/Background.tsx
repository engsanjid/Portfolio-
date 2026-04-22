export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 grid-bg" />
      <div className="scan-line" />

      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '-150px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)',
          animationDuration: '10s',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          bottom: '10%',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(176,0,255,0.12) 0%, transparent 70%)',
          animationDuration: '12s',
          animationDelay: '-4s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          top: '50%',
          left: '40%',
          background: 'radial-gradient(circle, rgba(0,255,204,0.07) 0%, transparent 70%)',
          animationDuration: '9s',
          animationDelay: '-2s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '350px',
          height: '350px',
          top: '20%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)',
          animationDuration: '14s',
          animationDelay: '-6s',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,245,255,0.05) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
