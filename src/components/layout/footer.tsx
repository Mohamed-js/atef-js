import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { aboutMe, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {aboutMe.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={socialLinks.github} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
