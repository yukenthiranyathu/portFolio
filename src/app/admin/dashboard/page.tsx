import { DashboardTabs } from '@/components/admin/DashboardTabs';
import { portfolioData } from '@/lib/portfolio-data';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Manage Content</h1>
        <p className="text-muted-foreground">Update your personal information, skills, and career journey.</p>
      </div>
      <DashboardTabs data={portfolioData} />
    </div>
  );
}
