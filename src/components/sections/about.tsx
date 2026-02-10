import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe, socialLinks } from "@/lib/data";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Me from "../../project-images/me.jpg"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-center">
            <Card className="w-full max-w-md overflow-hidden shadow-2xl transform-gpu transition-all hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src={Me}
                  alt={`Portrait of ${aboutMe.name}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {aboutMe.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
