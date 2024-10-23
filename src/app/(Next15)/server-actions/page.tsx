import CodeBlock from "@/components/codeBlock";
import Container from "@/components/container";
import Prose from "@/components/prose";

export default function Page() {
  return (
    <>
      <Container>
        <Prose>
          <h1>Server Actions Secuirty Update</h1>
          <p>
            Server Actions are server-side functions that can be called from the
            client. They are defined by adding the <code>'use server'</code>{" "}
            directive at the top of a file and exporting an async function.
          </p>

          <p>
            The issue with Server actions is that they are publicly accessible
            HTTP endpoints. Just like any other public facing endpoint.
          </p>

          <p>This can lead to unintional data leaks and security issues.</p>

          <p>
            Before Next 15 you could guess the id of a server action, becuase
            they were deterministic, they were basically like 1, 2, 3, etc. For
            each server action in your app. These ids are now non-deterministic
            and are generated at runtime. Making it bassically impossible to
            guess the id of a server action.
          </p>

          <p>
            {" "}
            They have also made it so dead server actions are no longer even
            included in the build.
          </p>

          <CodeBlock language="tsx">
            {`'use server'
 
 // This action **is** used in our application, so Next.js
 // will create a secure ID to allow the client to reference
 // and call the Server Action.
 export async function updateUserAction(formData) {}
  
 // This action **is not** used in our application, so Next.js
 // will automatically remove this code during 'next build'
 // and will not create a public endpoint.
 export async function deleteUserAction(formData) {} `}
          </CodeBlock>
        </Prose>
      </Container>
    </>
  );
}
