"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

type ProfileData = typeof portfolioData.profile;

interface ProfileSectionProps {
  data: ProfileData;
}

export function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <section id="profile" className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/3 w-full flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-primary/20 transition-transform hover:scale-105">
          <Image
            src={data.avatar}
            alt={data.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-110"
            data-ai-hint="professional headshot"
          />
        </div>
      </div>
      <div className="md:w-2/3 w-full text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">{data.name}</h1>
        <h2 className="font-headline text-2xl md:text-3xl font-medium text-foreground/80 mt-2">{data.title}</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto md:mx-0">{data.bio}</p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${data.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="ghost">
             <a href={`tel:${data.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
