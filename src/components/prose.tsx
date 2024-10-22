import React from "react";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

const Prose: React.FC<ProseProps> = ({ children, className }) => {
  return (
    <div className={cn("prose prose-invert max-w-none", className)}>
      {children}
    </div>
  );
};

export default Prose;
