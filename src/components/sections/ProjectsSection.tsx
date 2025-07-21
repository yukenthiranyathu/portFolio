"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

type ProjectsData = typeof portfolioData.projects;

interface ProjectsSectionProps {
  data: ProjectsData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col bg-card/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground mt-3">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-accent/30 text-accent-foreground">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={project.repoUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
