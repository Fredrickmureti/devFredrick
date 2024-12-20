import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Motorcyle and cars website",
    description: "A full-stack motorcyle and cars website solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio website built with Three.js",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm hover:text-purple-400 transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-sm hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}