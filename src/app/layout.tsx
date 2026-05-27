import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CanvasBackground } from "@/components/canvas/CanvasBackground";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushikesh Thorat | AI & Full Stack Architect",
  description: "Cinematic portfolio of Rushikesh Thorat, specializing in Java, Spring Boot, AI Integration, Cloud & Full Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScrolling>
          <CustomCursor />
          <CanvasBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
