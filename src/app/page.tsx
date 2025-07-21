import { portfolioData } from '@/lib/portfolio-data';
import Header from '@/components/Header';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const { profile, skills, experiences, projects } = portfolioData;

  return (
    <div className="bg-background min-h-screen text-foreground font-body">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 space-y-24 md:space-y-32">
        <ProfileSection data={profile} />
        <SkillsSection data={skills} />
        <ExperienceSection data={experiences} />
        <ProjectsSection data={projects} />
      </main>
      <Footer socialLinks={profile.socialLinks} />
    </div>
  );
}
