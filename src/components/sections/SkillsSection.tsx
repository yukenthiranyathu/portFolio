"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';

type SkillsData = typeof portfolioData.skills;

interface SkillsSectionProps {
  data: SkillsData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-primary">Tech</span> Stack & Skills
      </h2>
      <Card className="bg-card/50 border-none shadow-lg">
        <CardContent className="p-6 md:p-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {data.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-foreground">{skill.name}</h3>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}
