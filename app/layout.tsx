
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import GlobalMobileNav from "@/components/globalNav";


export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="">
      <html lang="en">
        <body>
          <GlobalMobileNav />
          {children}
          <Toaster />
        </body>
      </html>
    </div>
  );
}
