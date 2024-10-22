import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  children: string;
  className?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  children,
  className = "",
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={nightOwl}
      className={`rounded-md p-4 overflow-x-auto  ${className}`}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
