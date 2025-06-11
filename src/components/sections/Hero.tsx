
"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Scene from '../3d/Scene';
import ErrorBoundary from '../ui/ErrorBoundary';
import { useParallax } from '../../hooks/useParallax';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Fredrickmureti', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/fredrick-mureti-95bb5423a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fredrickmureti612@gmail.com', label: 'Email' }
];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const scrollY = useParallax();

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-600/10">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a855f7" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* 3D Background */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-br from-primary/5 to-purple-600/5" />}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1.2}
            />
            <Scene />
          </Canvas>
        </ErrorBoundary>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                >
                  <span className="block text-foreground">Hey, I'm</span>
                  <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient">
                    Fredrick
                  </span>
                </motion.h1>
                
                {/* Glowing effect behind text */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-3xl -z-10" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.p 
                  className="text-2xl md:text-3xl font-semibold text-primary mb-4"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Full-Stack Developer
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Crafting exceptional digital experiences with modern technologies, 
                  innovative solutions, and pixel-perfect designs that bring ideas to life.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-2xl border-0 relative overflow-hidden group"
                    onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="relative z-10 flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/50"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex gap-4 pt-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/50 backdrop-blur-sm rounded-full border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated background rings */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-purple-600/20 to-pink-600/20 blur-xl"
                />
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-l from-purple-600/15 via-primary/15 to-pink-600/15 blur-lg"
                />

                <motion.img
                  src="https://avatars.githubusercontent.com/u/121539435?v=4"
                  alt="Fredrick Mureti - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover shadow-2xl z-10 border-4 border-primary/20"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating orbs around image */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    animate={{
                      x: [0, 30 * Math.cos(i * Math.PI / 3), 0],
                      y: [0, 30 * Math.sin(i * Math.PI / 3), 0],
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-6px',
                      marginTop: '-6px',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full p-1 bg-card/30 backdrop-blur-sm">
            <motion.div 
              className="w-1.5 h-1.5 bg-current rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
