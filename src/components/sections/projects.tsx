import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import ProjectImage1 from "../../project-images/TadreebTech.png"
import ProjectImage2 from "../../project-images/Mabi3a.png"
import ProjectImage3 from "../../project-images/Portofy.png"


const projectImages: Record<string, any> = {
    'project-1': ProjectImage1,
    'project-2': ProjectImage2,
    'project-3': ProjectImage3,
};


export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            A selection of my recent work.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = projectImages[project.image];
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden group transform-gpu transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  {projectImage && (
                    <Image
                      src={projectImage}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="-ml-3">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
