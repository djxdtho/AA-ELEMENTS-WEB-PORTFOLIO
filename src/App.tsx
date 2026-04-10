import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
