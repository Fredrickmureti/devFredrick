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
    title: 'Gradient Generator Pro',
    description: 'A powerful and beautiful gradient generator built with React and TypeScript that helps developers create stunning gradients visually and get the code in multiple formats.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739233854/Macbook-Air-gradient-generator-pro.vercel.app_oosrin.png',
    tags: ['JavaScript', 'React',  'Tailwind CSS', 'Typescript'],
    demoUrl: 'https://gradient-generator-pro.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Gradient_Generator_Pro',
  },
  {
    title: '3D Character Creator',
    description: 'A powerful web-based 3D character creation tool that allows users to design and customize their own 3D characters with photo textures and various customization options.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739235920/Macbook-Air-3-d-character-creator.vercel.app_coroub.png',
    tags: ['JavaScript', 'React',  'Tailwind CSS', 'Typescript', '3js'],
    demoUrl: 'https://3-d-character-creator.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/3D_Character_Creator',
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
   {
    title: 'Drum Machine',
    description: 'The Drum Machine is a simple web application that allows users to play different drum sounds using their keyboard or by clicking on buttons. The application features two sound banks and a control panel for power, volume, and sound bank toggling.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739224302/Macbook-Air-drum-machine-two-pi.vercel.app_pooka3.png',
    tags: ['JavaScript', 'React', 'CSS'],
    demoUrl: 'https://drum-machine-two-pi.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Drum-Machine',
  },
  {
    title: 'Candy Crush Game 🍬',
    description: 'A fun Candy Crush game implemented in HTML, CSS, and JavaScript, featuring colorful candies, scoring, and streak tracking. The game includes swipe functionality for mobile devices, music control, and more.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739224514/Galaxy-Tab-S7-candy-crush-gilt.vercel.app_pnfxas.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    demoUrl: 'https://candy-crush-gilt.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/CANDY_CRUSH',
  },
  {
    title: 'Quote Generator',
    description: 'A simple React application that fetches quotes from an API and displays them with options to tweet or post them on Tumblr. The background color changes with each new quote. This project also integrates FontAwesome icons for social media link.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739224922/Macbook-Air-quote-machine-alpha.vercel.app_pxct5e.png',
    tags: ['JavaScript', 'React', 'CSS'],
    demoUrl: 'https://candy-crush-gilt.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/quote-machine',
  },
   {
    title: 'Tic-Tac-Toe Game with Background Music 🎵',
    description: 'This project is a Tic-Tac-Toe game with a polished user interface, customizable player names, and background music. The music changes automatically as each track finishes and can be toggled on or off. The game is built with HTML, CSS, and JavaScript, creating a fun and interactive experience!',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739225174/Macbook-Air-tic-tac-toe-hazel-five.vercel.app_kftlgv.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    demoUrl: 'https://tic-tac-toe-hazel-five.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/Tic-Tac-Toe',
  },
  {
    title: 'Motorcycle Sales Platform',
    description: 'Welcome to the Motorcycle Sales Platform, a comprehensive solution for buying and selling motorcycles. This platform is built using the MERN stack (MongoDB, Express, React, Node.js) and is designed to provide a seamless experience for both buyers and sellers.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739225536/Macbook-Air-motorcycle-arena.vercel.app_uldaus.png',
    tags: ['JavaScript', 'React','CSS', 'Nodejs', 'MongoDB', 'Expressjs', 'Cloudinary'],
    demoUrl: 'https://motorcycle-arena.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/motorcycle-sales',
  },
  {
    title: 'Forex Market Analyzer',
    description: 'This project is a trading bot application that fetches real-time market data, performs analysis, and makes predictions using machine learning models. The application is built using Node.js for the backend, React for the frontend, and Python for the machine learning model.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739225757/Macbook-Air-market-analysis-platfom-front-end.vercel.app_quiix7.png',
    tags: ['JavaScript', 'React','CSS', 'Nodejs', 'MongoDB', 'Expressjs', 'Python'],
    demoUrl: 'https://market-analysis-platfom-front-end.vercel.app/',
    githubUrl: 'https://github.com/Fredrickmureti/market-analysis-platfom',
  },
  {
  title: 'TaskMaster Pro',
  description: `TaskMaster Pro is a powerful task management application designed to enhance productivity. It enables users to:

  ✅ **Set Reminders** – Get timely notifications to stay on top of important tasks.  
  ✅ **Real-Time Calendar** – View an up-to-date calendar for better planning.  
  ✅ **Activity Tracking** – Monitor daily tasks and track progress effortlessly.  
  ✅ **Completion Rate Analysis** – Measure task completion over time.  
  ✅ **Weekly Growth Insights** – Analyze trends and improve efficiency.  
  ✅ **Task Management** – Easily add, update, and organize your to-do list.  

  TaskMaster Pro helps users stay organized, focused, and productive. 🚀`,
  image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739226216/Macbook-Air-task-manager-six-zeta.vercel.app_p9gf5k.png',
  tags: ['JavaScript', 'React', 'CSS', 'Tailwind CSS', 'Typescript'],
  demoUrl: 'https://task-manager-six-zeta.vercel.app/',
  githubUrl: 'https://github.com/Fredrickmureti/Task_Manager',
},
  {
    title: 'Blog Platform',
    description: 'This project is a blog platform where users can write and publish articles. It is built with TypeScript and React, and uses Supabase for storage.',
    image: 'https://res.cloudinary.com/db3m7jneg/image/upload/v1739228689/Macbook-Air-blog-woad-nine-43.vercel.app_moie3g.png',
    tags: ['JavaScript', 'React', 'Tailwind css', 'Typescript', 'Nodejs', 'Expressjs', 'MongoDB'],
    demoUrl: 'https://blog-woad-nine-43.vercel.app',
    githubUrl: 'https://github.com/Fredrickmureti/blog',
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
