import { useState, useEffect } from "react";
import { SidebarNav } from "./components/SidebarNav";
import { TopBar } from "./components/TopBar";
import { HeroSection } from "./components/sections/HeroSection";
import { ApproccioSection } from "./components/sections/ApproccioSection";
import { AreeLavoroSection } from "./components/sections/AreeLavoroSection";
import { RisorseSection } from "./components/sections/RisorseSection";
import { CollaborazioniSection } from "./components/sections/CollaborazioniSection";
import { ContattoSection } from "./components/sections/ContattoSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "approccio",
        "aree",
        "progetti",
        "risorse",
        "collaborazioni",
        "contatto",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <SidebarNav activeSection={activeSection} />

      <main className="ml-0 lg:ml-64">
        <TopBar />
        <HeroSection />
        <ApproccioSection />
        <AreeLavoroSection />
        <RisorseSection />
        <CollaborazioniSection />
        <ContattoSection />
      </main>
    </div>
  );
}