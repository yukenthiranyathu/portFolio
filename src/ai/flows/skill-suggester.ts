// skill-suggester.ts
'use server';

/**
 * @fileOverview AI Skill Suggester flow.
 *
 * This file defines a Genkit flow that suggests relevant skills to users based on their current skills and experience.
 *
 * @remarks
 * - The flow takes a user's current skills and experience as input.
 * - It uses a language model to generate a list of suggested skills.
 * - The flow returns a list of suggested skills as output.
 *
 * @exports suggestSkills - The main function to trigger the skill suggestion flow.
 * @exports SkillSuggesterInput - The input type for the suggestSkills function.
 * @exports SkillSuggesterOutput - The output type for the suggestSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const SkillSuggesterInputSchema = z.object({
  currentSkills: z
    .string()
    .describe('A comma-separated list of the user\'s current skills.'),
  experience: z.string().describe('A description of the user\'s experience.'),
});
export type SkillSuggesterInput = z.infer<typeof SkillSuggesterInputSchema>;

// Define the output schema
const SkillSuggesterOutputSchema = z.object({
  suggestedSkills: z
    .string()
    .describe(
      'A comma-separated list of skills suggested by the AI to improve the user\'s portfolio.'
    ),
});
export type SkillSuggesterOutput = z.infer<typeof SkillSuggesterOutputSchema>;

// Exported function to call the flow
export async function suggestSkills(input: SkillSuggesterInput): Promise<SkillSuggesterOutput> {
  return skillSuggesterFlow(input);
}

// Define the prompt
const skillSuggesterPrompt = ai.definePrompt({
  name: 'skillSuggesterPrompt',
  input: {schema: SkillSuggesterInputSchema},
  output: {schema: SkillSuggesterOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant skills to users based on their current skills and experience.

  Given the following information about a user, suggest a list of skills that they could highlight on their portfolio to attract more job opportunities.
  Return the skills as a comma separated list.

  Current Skills: {{{currentSkills}}}
  Experience: {{{experience}}}
  `,
});

// Define the flow
const skillSuggesterFlow = ai.defineFlow(
  {
    name: 'skillSuggesterFlow',
    inputSchema: SkillSuggesterInputSchema,
    outputSchema: SkillSuggesterOutputSchema,
  },
  async input => {
    const {output} = await skillSuggesterPrompt(input);
    return output!;
  }
);
