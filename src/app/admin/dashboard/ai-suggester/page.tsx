import { SkillSuggester } from "@/components/admin/SkillSuggester"

export default function AiSuggesterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">AI Skill Suggester</h1>
        <p className="text-muted-foreground">
          Leverage AI to discover new skills to highlight on your portfolio based on your current experience.
        </p>
      </div>
      <SkillSuggester />
    </div>
  )
}
