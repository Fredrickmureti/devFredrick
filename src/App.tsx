import { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
//import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Footer from './components/sections/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ThemeProvider } from './components/ui/theme-provider';
import Testimonials from './components/sections/testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Timeline from './components/sections/timeline';

function App() {
  return (
    <ThemeProvider>
    <div className="app">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline/>
        <Certificates />
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Footer />
      </Suspense>
    </div>
    </ThemeProvider>
  );
}

export default App;