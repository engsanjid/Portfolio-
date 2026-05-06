import Background  from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navigation  from './components/Navigation';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Stats       from './components/Stats';
import Projects    from './components/Projects';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative',overflowX: 'hidden', width: '100%' }}>
      <Background />
      <CustomCursor />
      <Navigation />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
