
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { Key, useState } from 'react';
import ImageCarousel from '../ui/ImageCarousel';
import { useToast } from '../ui/useToast';
import { useParallax } from '../../hooks/useParallax';

// Import the projects data
// @ts-ignore 
import personalProjects from '../../personalProjects';

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string[];
  tags?: string[];
  liveUrl: string;
  githubUrl: string;
  isPrivate?: boolean;
  featured?: boolean;
  stars?: number;
}

interface Project extends ProjectCardProps {}

// Convert personalProjects object to an array for rendering
const developerTools = personalProjects.developerTools as Project[];
const clientProjects = personalProjects.clientBasedFullStack as Project[];
const fullStackProjects = personalProjects.fullStackForFun as Project[];
const funProjects = personalProjects.funProjects as Project[];
const allProjects = [...developerTools, ...clientProjects, ...fullStackProjects, ...funProjects];

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  name, 
  description, 
  imageUrl, 
  tags, 
  liveUrl, 
  githubUrl, 
  isPrivate, 
  featured, 
  stars 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { toast } = useToast();

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isPrivate) {
      e.preventDefault();
      toast({
        title: "Private Repository",
        description: "This project's source code is in a private repository and is not publicly accessible.",
        duration: 5000,
      });
    }
  };

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
            {Array.isArray(imageUrl) && (
              <ImageCarousel images={imageUrl} alt={name} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            {featured && (
              <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
            {isPrivate && (
              <span className="absolute top-4 left-4 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                Private Repository
              </span>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              {stars && (
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span className="text-sm">{stars}</span>
                </div>
              )}
            </div>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags && tags.map((tag: string, index: Key) => (
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
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
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
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleGithubClick}
                  >
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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const scrollY = useParallax();

  // Filter projects based on the active category
  const filteredProjects = 
    activeCategory === 'all' ? allProjects :
    activeCategory === 'developer' ? developerTools :
    activeCategory === 'client' ? clientProjects :
    activeCategory === 'fullstack' ? fullStackProjects :
    funProjects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A collection of my recent work and projects.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              variant={activeCategory === 'all' ? "default" : "outline"}
              onClick={() => setActiveCategory('all')}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button 
              variant={activeCategory === 'developer' ? "default" : "outline"}
              onClick={() => setActiveCategory('developer')}
              className="rounded-full"
            >
              Developer Tools
            </Button>
            <Button 
              variant={activeCategory === 'client' ? "default" : "outline"}
              onClick={() => setActiveCategory('client')}
              className="rounded-full"
            >
              Client Projects
            </Button>
            <Button 
              variant={activeCategory === 'fullstack' ? "default" : "outline"}
              onClick={() => setActiveCategory('fullstack')}
              className="rounded-full"
            >
              Full Stack (For Fun)
            </Button>
            <Button 
              variant={activeCategory === 'fun' ? "default" : "outline"}
              onClick={() => setActiveCategory('fun')}
              className="rounded-full"
            >
              Fun Projects
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
