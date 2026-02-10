import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/background-beams";
import { ArrowRight } from "lucide-react";
import { aboutMe } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80dvh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500 animate-gradient-x">
                {aboutMe.name}
              </span>
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Innovative FullStack Engineer with expertise in building and optimizing web and mobile applications.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
