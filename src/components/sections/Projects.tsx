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
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739186314/Macbook-Air-readme-generator-pro.vercel.app_ivieui.png',
    tags: ['JavaScript', 'TypeScript', 'TailwindCSS', 'React'],
    demoUrl: 'https://readme-generator-pro.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Readme_Generator_Pro',
  },
  {
    title: 'Dev Utils Hub',
    description: 'A comprehensive collection of developer utilities designed to streamline your workflow. This application provides various tools that developers frequently need, all in one place.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739184931/Macbook-Air-dev-utils-hub.vercel.app_wux06h.png',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://dev-utils-hub.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Dev_Utils_Hub',
  },
  {
    title: 'Share Prompts',
    description: 'Share Prompts is a web application that allows users to share and explore creative prompts. This project is built using Next.js, React, and Tailwind CSS, with MongoDB as the database.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739185594/Macbook-Air-promptshare-platform.vercel.app_zb5nhx.png',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js', 'MongoDB', 'JavaScript'],
    demoUrl: 'https://promptshare-platform.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/promptopia-',
  },
  {
    title: 'Refine Dashboard',
    description: 'This project is a data-intensive application built using the Refine.dev framework. It provides a robust and flexible platform for managing and displaying data with a modern and intuitive interface.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739185941/Macbook-Air-refine-dashboard-sigma.vercel.app_mpw0tm.png',
    tags: ['React', 'Refine', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://refine-dashboard-sigma.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/REFINE-DASHBOARD',
  },
  {
    title: 'Exercise Tracker App',
    description: 'Exercise Tracker App is a web application that allows users to log their activities, track their exercise routines, and receive notifications when scheduled activities are due.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739186607/Macbook-Air-exercise-tracker-arena.vercel.app_dg89u9.png',
    tags: ['React', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://exercise-tracker-arena.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/exercise-tracker',
  },
   {
    title: 'ERP System',
    description: 'A comprehensive ERP system designed to streamline project management and team collaboration. It enables members to track active projects, monitor individual and team workload, optimize resource utilization, and manage tasks efficiently—all within a centralized platform.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739190004/Macbook-Air-erp-system-tan.vercel.app_1_zuhcd3.png',
    tags: ['JavaScript', 'TypeScript', 'TailwindCSS', 'React', 'Superbase'],
    demoUrl: 'https://erp-system-tan.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/ERP_SYSTEM-',
  },
    {
    title: '25 + 5 Clock',
    description: 'This project is a Pomodoro-style clock built with React. The 25 + 5 clock features a 25-minute work session followed by a 5-minute break session. The clock counts down each session and automatically switches between work and break modes.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739223122/Macbook-Air-javascript-clock-cyan.vercel.app_qed7tc.png',
    tags: ['JavaScript', 'React', 'CSS'],
    demoUrl: 'https://javascript-clock-cyan.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/javascript_clock',
  },
   {
    title: 'Markdown Previewer',
    description: 'A simple Markdown Previewer built with React that allows users to write and preview Markdown content in real-time. The application includes features for toggling between full-screen modes for the editor and the previewer.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739223871/Macbook-Air-markdown-previewer-roan-seven.vercel.app_tmqug7.png',
    tags: ['JavaScript', 'React', 'CSS'],
    demoUrl: 'https://markdown-previewer-roan-seven.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Markdown-previewer',
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
