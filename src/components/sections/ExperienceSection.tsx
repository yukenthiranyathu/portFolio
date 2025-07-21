"use client";

import { portfolioData } from '@/lib/portfolio-data';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

type ExperienceData = typeof portfolioData.experiences;

interface ExperienceSectionProps {
  data: ExperienceData;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        Career <span className="text-primary">Journey</span>
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.map((item, index) => (
            <motion.div key={index} className="relative flex items-start gap-6" variants={itemVariants}>
              <div className="absolute left-4 md:left-1/2 -ml-2.5 mt-1.5 w-5 h-5 rounded-full bg-primary border-4 border-background ring-2 ring-primary"></div>
              <div className="md:w-1/2 md:text-right md:pr-12">
                <p className="text-sm text-muted-foreground mt-1.5 hidden md:block">{item.period}</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                 <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <p className="text-sm text-muted-foreground mb-1 md:hidden">{item.period}</p>
                    <h3 className="text-xl font-bold text-primary font-headline">{item.role}</h3>
                    <p className="text-md font-medium text-foreground/80">{item.company}</p>
                    <p className="mt-3 text-muted-foreground">{item.description}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
