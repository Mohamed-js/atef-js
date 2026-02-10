"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full -z-10 transition-all duration-500",
        className
      )}
    >
       <div className="absolute inset-0 h-full w-full bg-background bg-[radial-gradient(hsl(var(--primary)/0.15),transparent_1.5px)] [background-size:32px_32px] animate-pulse"></div>
       <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>
  );
};
