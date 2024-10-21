import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appSideBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "React 19 Workshop",
  description: "Learn about React 19 updates and features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} flex h-screen bg-background`}>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />

          <main className="flex-1 overflow-auto">
            <header className="flex fled-row gap-2 h-14 items-center border-b bg-muted/40 px-6">
              <SidebarTrigger />
              <h1 className="ml-2 text-lg font-semibold lg:ml-0">
                React 19 Updates and Features
              </h1>
            </header>

            <div className="p-14">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
