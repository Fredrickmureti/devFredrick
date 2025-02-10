import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Boma Net',
    position: 'Web Developer',
    period: '2021 - Present',
    description:
      'Spearheaded the development of Boma Net’s website, creating robust backend services and intuitive frontend interfaces that enhanced user engagement.',
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
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 dark:text-white"
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
              className="flex gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">{exp.position}</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
