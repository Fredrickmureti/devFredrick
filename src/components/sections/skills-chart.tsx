"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const skillsData = [
  { category: 'Frontend', value: 95 },
  { category: 'Backend', value: 90 },
  { category: 'Mobile', value: 95 },
  { category: 'DevOps', value: 85 },
  { category: 'Database', value: 88 },
  { category: 'UI/UX', value: 85 },
  { category: 'Testing', value: 82 },
  { category: 'Architecture', value: 88 }
];

export default function SkillsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-[400px]"
    >
      <Card className="p-6 h-full bg-card/50 backdrop-blur-sm">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
            <PolarGrid className="text-muted-foreground" />
            <PolarAngleAxis
              dataKey="category"
              className="text-muted-foreground"
              tick={{ fill: 'currentColor', fontSize: 12 }}
            />
            <PolarRadiusAxis className="text-muted-foreground" />
            <Tooltip
              content={({ payload }) => {
                if (!payload || !payload[0]) return null;
                return (
                  <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg border shadow-lg">
                    <p className="font-medium">{payload[0].payload.category}</p>
                    <p className="text-sm text-muted-foreground">
                      Proficiency: {payload[0].value}%
                    </p>
                  </div>
                );
              }}
            />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}