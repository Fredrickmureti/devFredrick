"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Scene from '../3d/Scene';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600" style={{
                color: "black"
              }}>
                Full-Stack Developer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" style={{color: "black"}}>
                Crafting exceptional digital experiences with modern technologies and innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-72 h-72 mx-auto lg:w-96 lg:h-96">
                <img
                  src="https://avatars.githubusercontent.com/u/121539435?v=4"
                  alt="Developer Portrait"
                  className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-purple-600/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
          
        }}
        style={{
          backgroundColor: "aqua",
          borderRadius: "20px",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}