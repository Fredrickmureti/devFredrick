
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress } from '../ui/Progress';
import SkillsChart from './skills-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './../ui/tabs';
import { Badge } from '../ui/badge';
import { useParallax } from '../../hooks/useParallax';

const skills = {
  frontend: [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Material UI', level: 85 },
    { name: 'Ant Design', level: 85 },
    { name: 'Framer Motion', level: 88 }
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'Supabase', level: 92 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST APIs', level: 90 },
    { name: 'MongoDB', level: 85 }
  ],
  mobile: [
    { name: 'React Native', level: 95 },
    { name: 'iOS Development', level: 80 },
    { name: 'Android Development', level: 80 },
    { name: 'Mobile UI/UX', level: 85 },
    { name: 'App Performance', level: 90 },
    { name: 'Expo', level: 88 }
  ],
  other: [
    { name: 'DevOps', level: 75 },
    { name: 'Data Science', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Git/GitHub', level: 90 }
  ]
};

const certifications = [
  'AWS Certified Developer',
  'React Native Certification',
  'Full Stack Development',
  'Mobile App Development',
  'UI/UX Design Principles'
];

interface SkillProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-6 group"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium group-hover:text-primary transition-colors">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="relative">
        <Progress value={level} className="h-3 transition-all duration-300 group-hover:h-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const scrollY = useParallax();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <SkillsChart />
          
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Backend</TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mobile</TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Other</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category} className="space-y-1">
                {categorySkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
