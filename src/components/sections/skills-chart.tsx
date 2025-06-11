
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
  { category: 'Database', value: 88 },
  { category: 'DevOps', value: 85 },
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
      className="w-full h-[450px]"
    >
      <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-center mb-6 text-primary">Technical Proficiency</h3>
        <ResponsiveContainer width="100%" height="85%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
            <PolarGrid 
              className="text-muted-foreground/30" 
              gridType="polygon"
              radialLines={true}
            />
            <PolarAngleAxis
              dataKey="category"
              className="text-muted-foreground"
              tick={{ 
                fill: 'currentColor', 
                fontSize: 12,
                fontWeight: 500
              }}
            />
            <PolarRadiusAxis 
              className="text-muted-foreground/50" 
              tick={{ fontSize: 10 }}
              tickCount={6}
              domain={[0, 100]}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || !payload[0]) return null;
                return (
                  <div className="bg-background/95 backdrop-blur-sm p-3 rounded-lg border shadow-xl">
                    <p className="font-semibold text-primary">{payload[0].payload.category}</p>
                    <p className="text-sm text-muted-foreground">
                      Proficiency: <span className="font-medium text-foreground">{payload[0].value}%</span>
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
              fillOpacity={0.25}
              strokeWidth={2}
              dot={{ r: 4, fill: "hsl(var(--primary))" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
