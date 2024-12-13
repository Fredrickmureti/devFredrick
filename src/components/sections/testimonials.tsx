"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/avatar';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'Working with this developer was an absolute pleasure. Their technical expertise and attention to detail transformed our vision into reality.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder at StartupX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: 'The mobile app they developed for us exceeded our expectations. Their problem-solving skills and proactive communication made the project a success.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager at InnovateLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'Their expertise in both frontend and backend development helped us create a seamless user experience. Highly recommended!',
  }
];

const TestimonialCard = ({ name, role, image, content }: Testimonial) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
      <p className="text-muted-foreground mb-6 italic">{content}</p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <img
            src={image}
            alt={name}
            className="rounded-full object-cover w-12 h-12"
          />
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}