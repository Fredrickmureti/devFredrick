"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene from '../3d/Scene';
import ErrorBoundary from '../ui/ErrorBoundary';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Fredrickmureti', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/fredrick-mureti-95bb5423a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fredrickmureti612@gmail.com', label: 'Email' }
];

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-600/10">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-br from-primary/5 to-purple-600/5" />}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.8}
            />
            <Scene />
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="block text-foreground">Hey, I'm</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Fredrick
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Crafting exceptional digital experiences with modern technologies, 
                  innovative solutions, and pixel-perfect designs that bring ideas to life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <a href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <a href="#contact">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/50 backdrop-blur-sm rounded-full border hover:border-primary/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl"
                />
                <motion.img
                  src="https://avatars.githubusercontent.com/u/121539435?v=4"
                  alt="Fredrick Mureti - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover shadow-2xl z-10 border-4 border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-purple-600/10 z-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1 bg-card/30 backdrop-blur-sm">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
