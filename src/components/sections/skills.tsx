"use client";

import { useState } from "react";
import { projects as projectData, skills as skillsData } from "@/lib/data";
import { visualizeSkillsFromProjects } from "@/ai/flows/visualize-skills-from-projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { TypingAnimation } from "../typing-animation";

function SkillsContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visualization, setVisualization] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setVisualization(null);
    try {
      const projectDescriptions = projectData.map(p => p.description);
      const result = await visualizeSkillsFromProjects({ projectDescriptions });
      if (result && result.skillsVisualization) {
        setVisualization(result.skillsVisualization);
      } else {
        throw new Error("AI did not return a visualization.");
      }
    } catch (e: any) {
      setError(e.message || "An error occurred while analyzing skills.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="grid gap-12">
      <div className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill) => (
          <Badge key={skill} variant="default" className="text-sm px-4 py-2 transform-gpu transition-all hover:scale-110 hover:shadow-lg cursor-default bg-secondary text-secondary-foreground hover:bg-accent">
            {skill}
          </Badge>
        ))}
      </div>
      <Card className="max-w-3xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="font-headline text-center flex items-center justify-center gap-2">
            <Wand2 className="text-primary"/>
            AI-Powered Skill Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
           <p className="text-muted-foreground">
            Click the button to use GenAI to analyze my project descriptions and suggest a visual representation of my skills.
          </p>
          <Button onClick={handleAnalyze} disabled={loading} size="lg">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Visualize with AI"
            )}
          </Button>

          {visualization && (
            <div className="mt-6 text-left p-6 bg-background rounded-lg border">
              <TypingAnimation text={visualization} />
            </div>
          )}
          {error && <p className="mt-4 text-destructive">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}


export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            The technologies and tools I use to build things.
          </p>
        </div>
        <div className="mt-12">
            <SkillsContent/>
        </div>
      </div>
    </section>
  );
}
