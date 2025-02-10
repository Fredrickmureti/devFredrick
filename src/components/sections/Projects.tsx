"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { Key } from 'react';

const projects = [
  {
    title: 'Readme Generator Pro',
    description: 'A professional README generator built with React and TypeScript that helps developers create beautiful, comprehensive README files for their GitHub projects.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739184437/Macbook-Air-readme-generator-pro.vercel.app_ywjlp6.png',
    tags: ['Javascript', 'TypeScript', 'TailwindCSS', 'React'],
    demoUrl: 'https://readme-generator-pro.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Readme_Generator_Pro',
  },
  {
    title: 'Dev Utils Hub',
    description: 'A comprehensive collection of developer utilities designed to streamline your workflow. This application provides various tools that developers frequently need, all in one place.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739184931/Macbook-Air-dev-utils-hub.vercel.app_wux06h.png',
    tags: ['React', 'Tailwind CSS', 'Typescript', ],
    demoUrl: 'https://dev-utils-hub.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Dev_Utils_Hub',
  },
];

const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl, featured, stars }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={featured ? 'md:col-span-2 lg:col-span-1' : ''}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 300
        }}
        className="h-full"
      >
        <Card className="overflow-hidden flex flex-col h-full bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
          <div className="relative h-64 w-full">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            {featured && (
              <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span className="text-sm">{stars}</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag: string, index: Key) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <div className="flex gap-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-purple-600 w-full" 
                  asChild
                >
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  asChild
                >
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to -purple-600">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work and projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
