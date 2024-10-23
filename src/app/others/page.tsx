import Container from "@/components/container";
import Prose from "@/components/prose";

export default function Page() {
  return (
    <>
      <Container>
        <Prose>
          <h1>Others</h1>

          <ul>
            <li>
              <p>Support for next.config.ts</p>
            </li>
            <li>
              <p>Faster Static Generation for the App Router</p>
            </li>
            <li>
              <p>Static Route Indicator</p>
            </li>
            <li>
              <p>Hydration error improvements</p>
            </li>
          </ul>
        </Prose>
      </Container>
      <Container>
        <Prose>
          <h1>Cool things</h1>
          <ul>
            <li>
              <a href="https://v0.dev/"> v0: by Vercel </a>
            </li>
            <li>
              <a href="https://ui.shadcn.com/"> ShadCn Sidebar + blocks </a>
            </li>
          </ul>
        </Prose>
      </Container>
    </>
  );
}
