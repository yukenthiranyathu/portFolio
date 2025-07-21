import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const portfolioData = {
  profile: {
    name: "Sahan Perera",
    title: "Full-Stack Developer",
    location: "Colombo, Sri Lanka",
    email: "sahan.dev@email.com",
    phone: "+94 77 123 4567",
    bio: "A passionate Full-Stack Developer from the vibrant island of Sri Lanka, with a knack for building robust and scalable web applications. I thrive on turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring the latest tech trends or enjoying a cup of Ceylon tea.",
    avatar: "https://placehold.co/400x400.png",
    socialLinks: [
      { name: "GitHub", url: "https://github.com", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
      { name: "Email", url: "mailto:sahan.dev@email.com", icon: Mail },
      { name: "Phone", url: "tel:+94771234567", icon: Phone },
    ],
  },
  skills: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Firebase", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "GraphQL", level: 70 },
  ],
  experiences: [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech-Wave Solutions",
      period: "2020 - Present",
      description: "Leading the development of a large-scale e-commerce platform using Next.js and microservices architecture. Responsible for mentoring junior developers and driving technical decisions.",
    },
    {
      role: "Software Engineer",
      company: "CodeGen",
      period: "2018 - 2020",
      description: "Developed and maintained various client websites and internal tools using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      role: "Intern",
      company: "Virtusa",
      period: "2017 - 2018",
      description: "Gained hands-on experience in web development, working on front-end tasks using HTML, CSS, and JavaScript. Assisted the team in bug fixing and testing.",
    },
  ],
  projects: [
    {
      title: "Ceylon Cart",
      description: "A modern e-commerce platform for local Sri Lankan artisans to sell their products globally. Built with Next.js, Stripe, and Firebase.",
      image: "https://placehold.co/600x400.png",
      tags: ["Next.js", "Firebase", "Stripe", "E-commerce"],
      liveUrl: "#",
      repoUrl: "#",
      dataAiHint: "ecommerce website"
    },
    {
      title: "Travel Lanka",
      description: "A travel booking and information portal for tourists visiting Sri Lanka. Features include interactive maps, booking engine, and user reviews.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "Node.js", "MongoDB", "Maps API"],
      liveUrl: "#",
      repoUrl: "#",
      dataAiHint: "travel booking"
    },
    {
      title: "Dev Portfolio CMS",
      description: "The very Content Management System that powers this portfolio. An admin dashboard to manage all content dynamically.",
      image: "https://placehold.co/600x400.png",
      tags: ["Next.js", "Tailwind CSS", "Server Actions"],
      liveUrl: "#",
      repoUrl: "#",
      dataAiHint: "dashboard interface"
    },
    {
      title: "Task Master",
      description: "A sleek and intuitive project management tool designed to enhance team collaboration and productivity.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "GraphQL", "TypeScript"],
      liveUrl: "#",
      repoUrl: "#",
      dataAiHint: "task management"
    },
  ],
};
