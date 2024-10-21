import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mt-8 max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold">
        Welcome to React 19 on Next JS 15
      </h2>
      <p className="text-lg text-muted-foreground">
        Select a topic from the sidebar to learn more about React 19 and Next JS
        15 updates and features.
      </p>

      <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <Image src="/logo_dark.svg" alt="logo" width={400} height={400} />
        <Image src="/next_logo.webp" alt="logo" width={400} height={400} />
      </div>
    </div>
  );
}
