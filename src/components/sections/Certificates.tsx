import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

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
    title: "AWS Certified Solutions Architect Professional",
    organization: "Amazon Web Services",
    date: "2023",
    logo: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=200",
    credentialUrl: "#",
    description: "Advanced certification for designing distributed systems on AWS"
  },
  {
    title: "Google Cloud Professional Architect",
    organization: "Google Cloud",
    date: "2023",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=200",
    credentialUrl: "#",
    description: "Expert-level certification for Google Cloud architecture"
  },
  {
    title: "Meta React Native Developer",
    organization: "Meta",
    date: "2022",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200",
    credentialUrl: "#",
    description: "Professional certification for React Native development"
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