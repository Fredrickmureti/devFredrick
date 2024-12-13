import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
  type: 'work' | 'education' | 'achievement';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Senior Software Engineer',
    company: 'Tech Giants Inc.',
    description: 'Leading development of cloud-native applications and mentoring junior developers.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2023',
    title: 'Tech Lead',
    company: 'Innovation Labs',
    description: 'Spearheaded the development of AI-powered analytics platform.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2022',
    title: 'Best Mobile App Award',
    company: 'Tech Awards 2022',
    description: 'Received award for innovative mobile application development.',
    icon: Award,
    type: 'achievement'
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Developed enterprise-level web applications using modern technologies.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2020',
    title: 'MSc in Computer Science',
    company: 'Tech University',
    description: 'Specialized in Artificial Intelligence and Machine Learning.',
    icon: GraduationCap,
    type: 'education'
  }
];

const TimelineEvent = ({ year, title, company, description, icon: Icon, type }: TimelineEvent) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-cyan-500';
      case 'education':
        return 'from-purple-500 to-pink-500';
      case 'achievement':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 group"
    >
      <div className="absolute left-0 top-0 w-px h-full bg-border group-last:bg-gradient-to-b from-border to-transparent" />
      <div className={`absolute left-0 top-0 w-6 h-6 -translate-x-2.5 rounded-full bg-gradient-to-r ${getTypeStyles()} flex items-center justify-center`}>
        <Icon className="h-3 w-3 text-white" />
      </div>
      
      <Card className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          {year}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-primary mb-2">{company}</p>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional path and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}