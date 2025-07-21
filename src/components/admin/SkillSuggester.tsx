'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { suggestSkills } from '@/ai/flows/skill-suggester';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, Lightbulb, ClipboardCopy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/lib/portfolio-data';

const formSchema = z.object({
  currentSkills: z.string().min(1, 'Please enter your current skills.'),
  experience: z.string().min(10, 'Please describe your experience in at least 10 characters.'),
});

export function SkillSuggester() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentSkills: portfolioData.skills.map(s => s.name).join(', '),
      experience: portfolioData.profile.bio,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setSuggestedSkills([]);

    try {
      const result = await suggestSkills(values);
      if (result.suggestedSkills) {
        setSuggestedSkills(result.suggestedSkills.split(',').map(s => s.trim()).filter(Boolean));
      } else {
         setError('The AI did not return any suggestions. Try refining your input.');
      }
    } catch (e) {
      console.error(e);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied to clipboard!' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Analyze Your Profile</CardTitle>
              <CardDescription>
                Provide your skills and a brief of your experience. The AI will suggest other skills you could feature.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="currentSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Current Skills (comma-separated)</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Experience / Bio</FormLabel>
                    <FormControl>
                      <Textarea rows={7} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Get Suggestions
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card className="min-h-[300px] flex flex-col">
        <CardHeader>
          <CardTitle>AI-Powered Suggestions</CardTitle>
          <CardDescription>
            Here are some skills you might want to add to your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="font-medium">Thinking...</p>
              <p className="text-sm">Analyzing your profile to find the best skills.</p>
            </div>
          )}
          {!loading && error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {!loading && !error && suggestedSkills.length > 0 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Recommended skills:</p>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(suggestedSkills.join(', '))}>
                  <ClipboardCopy className="mr-2 h-4 w-4" /> Copy All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill, index) => (
                  <Badge key={index} className="text-base py-1 px-3 bg-accent text-accent-foreground hover:bg-accent/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
           {!loading && !error && suggestedSkills.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-center">
              <Lightbulb className="h-10 w-10 text-primary mb-4" />
              <p className="font-medium">Ready for suggestions?</p>
              <p className="text-sm">Fill out the form and click the button to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
