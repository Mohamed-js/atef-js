import { skills as skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

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
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skillsData.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 transform-gpu transition-all hover:scale-110 cursor-default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
