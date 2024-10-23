import React from "react";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

const Prose: React.FC<ProseProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "prose prose-p:text-white prose-headings:text-white/90 prose-ul:text-white prose-a:text-white prose-strong:text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Prose;
