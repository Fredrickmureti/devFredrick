
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Award, Users, Coffee } from 'lucide-react';
import { Card } from '../ui/Card';

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Award, label: 'Years Experience', value: '2+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' }
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code following industry best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
  },
  {
    icon: Terminal,
    title: 'Problem Solving',
    description: 'Analytical thinking and creative solutions to complex technical challenges.'
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Developer workspace"
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-600/20" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-primary">Passionate Full-Stack Developer</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 2 years of dedicated experience in web and mobile development, I specialize in creating
              beautiful and functional applications that solve real-world problems. My expertise spans across
              modern technologies including React, React Native, Node.js, and Supabase.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about writing clean, efficient code and staying up-to-date with the latest
              industry trends and best practices. My goal is to deliver exceptional digital experiences
              that exceed client expectations.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border hover:border-primary/50 transition-all duration-300"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
