
import { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Footer from './components/sections/Footer';
import Contact from './components/sections/Contact';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ThemeProvider } from './components/ui/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <div className="app min-h-screen bg-background text-foreground">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects /> 
          <Experience />
          <Certificates />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
