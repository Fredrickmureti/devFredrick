
import { motion } from 'framer-motion';
import { Card } from './Card';
import { ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function InteractiveCard({ children, className = '', delay = 0 }: InteractiveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  );
}
