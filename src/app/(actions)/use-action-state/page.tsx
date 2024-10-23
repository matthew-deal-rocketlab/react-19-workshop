"use client";

import { useActionState } from "react";

import { updateName } from "@/server/actions";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import Spinner from "@/components/spinner";
import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Prose from "@/components/prose";

export default function Page() {
  const [state, formAction, isPending] = useActionState(updateName, {
    name: "",
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center mt-10 min-h-[200px] p-4">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Container className="max-w-2xl">
        <div>
          <h1 className="text-4xl font-bold mb-2">Handling Forms</h1>
          <p className="text-center text-sm">The new way</p>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <form action={formAction}>
            <input
              type="text"
              name="name"
              className="border p-2 mr-2 text-black rounded-2xl"
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Updating..." : "Update Name"}
            </Button>
            {state.error && <p className="text-red-500 mt-2">{state.error}</p>}

            <Card name={state.name || ""} />
          </form>
        </main>
      </Container>

      <Accordion
        type="multiple"
        className="w-full bg-blue-500/60 text-white rounded-lg overflow-hidden"
      >
        <AccordionItem
          value="item-1"
          className="border-white/20 first:rounded-t-lg last:rounded-b-lg overflow-hidden"
        >
          <AccordionTrigger className="hover:text-white/80 px-4 py-2">
            <Prose>
              <h3>Key Takeaways</h3>
            </Prose>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <Prose>
              <ul>
                <li>
                  useStateAction() is a new hook to help manage state inside of
                  forms with actions
                </li>
                <li>
                  useFormStatus() is a new hook that can be called in nested
                  form components like a useContext hook
                </li>
              </ul>
            </Prose>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
