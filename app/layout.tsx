import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import dynamic from "next/dynamic";

const StartBackground = dynamic(
  () => import("@/components/main/StartBackground"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boda Santhosh - Professional Portfolio",
  description: "Portfolio of Boda Santhosh, Software Engineer with experience in React, Next.js, Node.js, and Cyber Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StartBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

