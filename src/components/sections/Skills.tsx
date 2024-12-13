"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress } from '../ui/progress';
import SkillsChart from './skills-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './../ui/tabs';

const skills = {
  frontend: [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Material UI', level: 85 },
    { name: 'Ant Design', level: 85 }
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST APIs', level: 90 },
    { name: 'MongoDB', level: 85 }
  ],
  mobile: [
    { name: 'React Native', level: 95 },
    { name: 'iOS Development', level: 80 },
    { name: 'Android Development', level: 80 },
    { name: 'Mobile UI/UX', level: 85 },
    { name: 'App Performance', level: 90 }
  ],
  other: [
    { name: 'DevOps', level: 75 },
    { name: 'Data Science', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 75 }
  ]
};

// Add this interface before SkillBar component
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
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SkillsChart />
          
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category}>
                {categorySkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}