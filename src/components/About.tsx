import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Passionate Developer</h3>
            <p className="text-gray-300">
              With over 5 years of experience in web development, I specialize in creating
              beautiful and functional applications that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Code2 className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold">Clean Code</h4>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Palette className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold">UI/UX Design</h4>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Terminal className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold">Problem Solving</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}