"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary transition-transform hover:scale-105">
          <Code className="h-6 w-6" />
          <span>Lankan Luminary</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
            <a href="mailto:sahan.dev@email.com">Contact Me</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
            <Button asChild variant="outline" className="border-primary text-primary">
              <a href="mailto:sahan.dev@email.com">Contact Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
