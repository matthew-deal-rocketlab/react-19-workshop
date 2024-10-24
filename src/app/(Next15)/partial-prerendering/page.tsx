"use client";

import Container from "@/components/container";
import Prose from "@/components/prose";

export default function Page() {
  return (
    <>
      <Container>
        <Prose>
          <h1>Partial Prerendering (PPR)</h1>
          <p>What is Partial Prerendering?</p>
          <ul>
            <li>
              <strong>Static Shell:</strong> PPR involves prerendering a static
              shell of the page, which includes elements that do not change
              often, such as navigation bars or static text. This shell is
              served quickly from edge locations to ensure a fast initial load.
            </li>

            <li>
              <strong>Dynamic Content:</strong> Dynamic parts of the page, such
              as user-specific data or frequently changing elements, are left as
              "holes" in the static shell. These are filled in asynchronously
              using React's Suspense component
            </li>
            <li>
              <strong>Streaming:</strong> PPR utilizes streaming to load dynamic
              content in parallel with serving the static shell, reducing
              overall load time. This allows users to start interacting with the
              page while dynamic content is still being fetched and rendered.
            </li>
            <li>
              <strong>Incremental Static Regeneration (ISR):</strong> PPR
              leverages ISR to update parts of the static shell without
              rebuilding the entire page. This ensures that static content can
              be updated efficiently over time.
            </li>
          </ul>
        </Prose>
      </Container>
    </>
  );
}
