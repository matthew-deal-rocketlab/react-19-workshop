"use client";

import Container from "@/components/container";
import CodeBlock from "@/components/codeBlock";
import { useState } from "react";
import { Button } from "@/components/ui/button";
function ExpensiveCalculation({ numbers }: { numbers: number[] }) {
  console.log("Expensive calculation running");

  const sum = numbers.reduce((total, num) => total + num, 0);

  return <div>Sum: {sum}</div>;
}

export default function Page() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <Container className="m-5">
        <div className="prose prose-p:text-white prose-headings:text-white/90">
          <h1 className="text-4xl font-bold mb-2">React Compiler</h1>

          <h2 className="text-xl">What does the compiler do?</h2>
          <p>
            React Compiler automatically memoizes your code. You may be familiar
            today with memoization through APIs such as useMemo, useCallback,
            and React.memo. With these APIs you can tell React that certain
            parts of your application don’t need to recompute if their inputs
            haven’t changed, reducing work on updates. While powerful, it’s easy
            to forget to apply memoization or apply them incorrectly. This can
            lead to inefficient updates as React has to check parts of your UI
            that don’t have any meaningful changes.
          </p>

          <p>
            The compiler uses its knowledge of JavaScript and React’s rules to
            automatically memoize values or groups of values within your
            components and hooks. If it detects breakages of the rules, it will
            automatically skip over just those components or hooks, and continue
            safely compiling other code.
          </p>
        </div>
      </Container>

      <Container className="bg-green-500/60 m-5">
        <div className="prose prose-p:text-white prose-headings:text-white/90 ">
          <div>
            <h3>Note:</h3>{" "}
            <p>
              React Compiler can statically detect when Rules of React are
              broken, and safely opt-out of optimizing just the affected
              components or hooks.
            </p>
          </div>
        </div>
      </Container>
      <Container className="m-5">
        <div className="prose prose-p:text-white prose-headings:text-white/90 max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Memoization Examples</h2>

          <h3 className="text-xl mt-6 mb-2">Before React 19 Compiler</h3>
          <p>
            Previously, developers had to manually implement memoization using
            hooks like useMemo and useCallback:
          </p>
          <CodeBlock language="tsx">
            {`import React, { useMemo, useCallback } from 'react';

function ExpensiveComponent({ data, onItemClick }) {
  // Manually memoizing the expensive calculation
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }));
  }, [data]);

  // Manually memoizing the callback function
  const handleItemClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return (
    <ul>
      {processedData.map(item => (
        <li key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Wrapping the entire component in memo for shallow prop comparison
export default React.memo(ExpensiveComponent);`}
          </CodeBlock>

          <h3 className="text-xl mt-6 mb-2">With React 19 Compiler</h3>
          <p>
            Now, with the React 19 compiler, you can write more straightforward
            code without manual memoization:
          </p>
          <CodeBlock language="tsx">
            {`import React from 'react';

function ExpensiveComponent({ data, onItemClick }) {
  // The compiler automatically memoizes this calculation
  const processedData = data.map(item => ({ ...item, processed: true }));

  return (
    <ul>
      {processedData.map(item => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// No need for manual memo() wrapping
export default ExpensiveComponent;`}
          </CodeBlock>

          <p className="mt-4">
            In this example, the React 19 compiler automatically handles
            memoization of the expensive calculation and the click handler. It
            also determines whether the component itself needs to be memoized,
            eliminating the need for manual React.memo() wrapping.
          </p>
        </div>
      </Container>

      <Container className="m-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center mb-4">
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <p className="font-bold">Count: {count}</p>
          </div>
          <ExpensiveCalculation numbers={numbers} />
        </div>
      </Container>

      <Container className="m-5">
        <div className="prose prose-p:text-white prose-headings:text-white/90 ">
          <h3>
            How do we know the React complier has memoized the function /
            functions?
          </h3>
          <p>React DevTools </p>
        </div>
      </Container>

      <Container className="bg-blue-500/60 m-5">
        <div className="prose prose-p:text-white prose-headings:text-white/90 prose-ul:text-white">
          <div>
            <h3>Key Takeaways:</h3>
            <ul>
              <li>No need for manual useMemo() and useCallback() calls</li>
              <li>
                Simplified component code without explicit memoization logic
              </li>
              <li>
                Automatic optimization of expensive calculations and event
                handlers
              </li>
              <li>
                Reduced risk of performance issues due to forgotten memoization
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
