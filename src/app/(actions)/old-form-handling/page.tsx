"use client";

import { useState } from "react";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import Container from "@/components/container";

export default function Page() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (inputValue.length < 1) {
        throw new Error("Name must be at least 1 character long");
      }

      setName(inputValue);
      setInputValue("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-10 min-h-[200px] p-4">
        <Spinner />
      </div>
    );

  return (
    <Container className="max-w-2xl">
      {" "}
      <div>
        <h1 className="text-4xl font-bold mb-2">Handling Forms</h1>
        <p className="text-center text-sm">The old way</p>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 mr-2 text-black rounded-2xl"
          />
          <Button type="submit" disabled={isLoading}>
            Update Name
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <Card name={name || ""} />
        </form>
      </main>
    </Container>
  );
}
