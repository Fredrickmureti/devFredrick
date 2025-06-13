"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/Card';
import { 
  Smartphone,
  Globe,
  LayoutDashboard,
  Database,
  BarChart,
  GitBranch,
  Code,
  Server,
  Cloud,
  Shield,
  Cpu,
  LineChart
} from 'lucide-react';
import { Tilt } from 'react-tilt';
import { useParallax } from '../../hooks/useParallax';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native with a focus on performance and user experience.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies like React, Next.js, and Node.js.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: LayoutDashboard,
    title: 'CRM Dashboards',
    description: 'Interactive and data-driven CRM solutions tailored to your business needs.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Database,
    title: 'Admin Dashboards',
    description: 'Comprehensive admin panels with user management, analytics, and customizable features.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart,
    title: 'Data Analysis',
    description: 'Advanced data visualization, cleaning, and reporting solutions for business intelligence.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: GitBranch,
    title: 'Data Engineering',
    description: 'Efficient ETL pipelines, database optimization, and data infrastructure development.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Code,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with robust authentication and documentation.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Server,
    title: 'Backend Systems',
    description: 'Scalable backend architectures with microservices and event-driven design.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure using AWS, Azure, or GCP.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Implementation of security best practices and compliance requirements.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Cpu,
    title: 'DevOps',
    description: 'CI/CD pipelines, container orchestration, and infrastructure as code.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: LineChart,
    title: 'Performance',
    description: 'Application optimization and performance monitoring solutions.',
    gradient: 'from-amber-500 to-orange-500'
  }
];

const ServiceCard = ({ icon: Icon, title, description, gradient }: Service) => {
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
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 300
        }}
      >
        <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br bg-opacity-10 backdrop-blur-sm border-opacity-30">
          <div className={`rounded-full p-3 w-14 h-14 mb-6 bg-gradient-to-r ${gradient} flex items-center justify-center`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export default function Services() {
  const scrollY = useParallax();

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Optimized Parallax Background */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs, powered by cutting-edge technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
