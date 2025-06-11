
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export default function About() {
  const scrollY = useParallax();

  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-20 px-4">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Passionate Developer</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating
              beautiful and functional applications that solve real-world problems. My journey
              in technology started with curiosity and has evolved into a passion for crafting
              exceptional digital experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in clean code, intuitive design, and continuous learning. Every project
              is an opportunity to push boundaries and create something meaningful.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                className="p-6 bg-card/50 backdrop-blur-sm rounded-xl text-center border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Code2 className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-semibold text-foreground">Clean Code</h4>
                <p className="text-sm text-muted-foreground mt-2">Writing maintainable and scalable code</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-card/50 backdrop-blur-sm rounded-xl text-center border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Palette className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-semibold text-foreground">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground mt-2">Creating beautiful user experiences</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-card/50 backdrop-blur-sm rounded-xl text-center border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Terminal className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-semibold text-foreground">Problem Solving</h4>
                <p className="text-sm text-muted-foreground mt-2">Finding innovative solutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
