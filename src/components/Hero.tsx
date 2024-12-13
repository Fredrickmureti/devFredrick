import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute w-full h-full">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>
      
      <div className="z-10 text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          DevFredrick
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
          style={{
            color: "black"
          }}
        >
          Full Stack Developer & 3D Enthusiast
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com/Fredrickmureti" className="hover:text-purple-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/fredrickmureti" className="hover:text-purple-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:fredrickmureti612@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}