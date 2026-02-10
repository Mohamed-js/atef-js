import Link from "next/link";
import { Code2 } from "lucide-react";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Code2 className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold">Portfolio Pro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
