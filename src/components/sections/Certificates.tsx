
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { useParallax } from '../../hooks/useParallax';

interface Certification {
  title: string;
  organization: string;
  date: string;
  logo: string;
  credentialUrl: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "FreeCodeCamp Backend Development and APIs",
    organization: "FreeCodeCamp",
    date: "2023",
    logo: "https://res.cloudinary.com/db3m7jneg/image/upload/v1739227606/BACKEND_t7xmt2.png",
    credentialUrl: "https://www.freecodecamp.org/certification/devFredrickmureti/back-end-development-and-apis",
    description: "certification for Backend development and APIs"
  },
  {
    title: "FreeCodecamp Responsive Web design",
    organization: "FreeCodeCamp",
    date: "2023",
    logo: "https://res.cloudinary.com/db3m7jneg/image/upload/v1739227241/WEB_DESIGN_sche0m.png",
    credentialUrl: "https://www.freecodecamp.org/certification/devFredrickmureti/responsive-web-design",
    description: "Expert-level certification for Responsive web design"
  },
  {
    title: "FreeCodeCamp FrontendDevelopment Libraries",
    organization: "FreeCodeCamp",
    date: "2022",
    logo: "https://res.cloudinary.com/db3m7jneg/image/upload/v1739227436/FRONTEND_g8izgc.png",
    credentialUrl: "https://www.freecodecamp.org/certification/devFredrickmureti/front-end-development-libraries",
    description: "Professional certification for Frontend Development Libraries"
  }
];

const CertificationCard = ({ title, organization, date, logo, credentialUrl, description }: Certification) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 rounded-lg overflow-hidden">
          <img
            src={logo}
            alt={organization}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Award className="h-4 w-4" />
            {organization}
            <span className="text-xs">•</span>
            <Calendar className="h-4 w-4" />
            {date}
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Credential
            </a>
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Certifications() {
  const scrollY = useParallax();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
