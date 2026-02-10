"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function TypingAnimation({ text, className }: { text: string, className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setI(0);
  }, [text]);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 20);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, text]);

  return (
    <p className={cn("text-muted-foreground", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
