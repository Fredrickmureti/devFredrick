
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';

const experiences = [
  {
    company: 'Boma Net',
    position: 'Web Developer',
    period: '2021 - Present',
    description:
      'Spearheaded the development of Boma Net website, creating robust backend services and intuitive frontend interfaces that enhanced user engagement.',
  },
  {
    company: 'Motor Mall',
    position: 'Full Stack Developer',
    period: 'Contract',
    description:
      'Architected and implemented a dynamic website for a motorcycle and spare parts enterprise, significantly boosting online presence and customer interaction.',
  },
  {
    company: 'Freelance Projects',
    position: 'Contract Developer',
    period: 'Various',
    description:
      'Collaborated with diverse clients on bespoke contracts, delivering innovative web solutions tailored to unique business requirements.',
  },
];

export default function Experience() {
  const scrollY = useParallax();

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border hover:border-primary/30 transition-all duration-300 group"
              style={{
                transform: `translateY(${scrollY * (0.05 * (index + 1))}px)`,
              }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
