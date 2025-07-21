import { ProjectsManager } from '@/components/admin/ProjectsManager';
import { portfolioData } from '@/lib/portfolio-data';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Manage Projects</h1>
        <p className="text-muted-foreground">Add, edit, or remove projects from your portfolio.</p>
      </div>
      <ProjectsManager initialProjects={portfolioData.projects} />
    </div>
  );
}
