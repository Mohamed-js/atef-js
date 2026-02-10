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
      </div>
    </footer>
  );
}
