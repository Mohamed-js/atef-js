'use server';
/**
 * @fileOverview A flow that uses generative AI to analyze a developer's projects and visually represent their skills.
 *
 * - visualizeSkillsFromProjects - A function that analyzes projects and visualizes skills.
 * - VisualizeSkillsFromProjectsInput - The input type for the visualizeSkillsFromProjects function.
 * - VisualizeSkillsFromProjectsOutput - The return type for the visualizeSkillsFromProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeSkillsFromProjectsInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of descriptions for the developer\s projects.'),
});
export type VisualizeSkillsFromProjectsInput = z.infer<typeof VisualizeSkillsFromProjectsInputSchema>;

const VisualizeSkillsFromProjectsOutputSchema = z.object({
  skillsVisualization: z
    .string()
    .describe('A description of how the developer\s skills can be visually represented.'),
});
export type VisualizeSkillsFromProjectsOutput = z.infer<typeof VisualizeSkillsFromProjectsOutputSchema>;

export async function visualizeSkillsFromProjects(
  input: VisualizeSkillsFromProjectsInput
): Promise<VisualizeSkillsFromProjectsOutput> {
  return visualizeSkillsFromProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeSkillsFromProjectsPrompt',
  input: {schema: VisualizeSkillsFromProjectsInputSchema},
  output: {schema: VisualizeSkillsFromProjectsOutputSchema},
  prompt: `You are an expert in visualizing data and representing skills in an engaging way.

  Analyze the following project descriptions and determine the key skills demonstrated by the developer.

  Project Descriptions:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}

  Based on these skills, provide a description of how the developer's skills can be visually represented in a portfolio.
  Consider using charts, graphs, or other visual elements to highlight the developer's strengths.
  Your response should be concise and focus on the best way to visually represent the developer's skills to potential employers.
  `,
});

const visualizeSkillsFromProjectsFlow = ai.defineFlow(
  {
    name: 'visualizeSkillsFromProjectsFlow',
    inputSchema: VisualizeSkillsFromProjectsInputSchema,
    outputSchema: VisualizeSkillsFromProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
