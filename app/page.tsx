"use client";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import BentoHeader from "@/components/main/BentoHeader";
import About from "@/components/main/About";
import Stats from "@/components/main/Stats";
import Services from "@/components/main/Services";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

        <BentoHeader />

        <Stats />

        <About />

        <Services />

        <Skills />

        <Experience />

        <Encryption />

        <Projects />

        <Education />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
