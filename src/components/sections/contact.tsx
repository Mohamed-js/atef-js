import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 flex justify-center">
          <Button size="lg" asChild>
            <a href="https://wa.me/201100086711" target="_blank" rel="noopener noreferrer">
              Send Via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
