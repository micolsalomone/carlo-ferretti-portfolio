import { useState, useEffect } from "react";
import { SidebarNav } from "./components/SidebarNav";
import { TopBar } from "./components/TopBar";
import { HeroSection } from "./components/sections/HeroSection";
import { ApproccioSection } from "./components/sections/ApproccioSection";
import { AreeLavoroSection } from "./components/sections/AreeLavoroSection";
import { RisorseSection } from "./components/sections/RisorseSection";
import { CollaborazioniSection } from "./components/sections/CollaborazioniSection";
import { ContattoSection } from "./components/sections/ContattoSection";
import { FadeInSection } from "./components/FadeInSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [forceFadeVisible, setForceFadeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "approccio",
        "aree",
        "progetti",
        "media",
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

  const handleSidebarScroll = (id: string) => {
    setForceFadeVisible(true);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setTimeout(() => setForceFadeVisible(false), 800); // reset dopo fade
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SidebarNav
        activeSection={activeSection}
        onScrollToSection={handleSidebarScroll}
      />
      <main className="ml-0 lg:ml-64">
        <TopBar />
        <FadeInSection forceVisible={forceFadeVisible}>
          <HeroSection />
        </FadeInSection>
        <FadeInSection forceVisible={forceFadeVisible}>
          <ApproccioSection />
        </FadeInSection>
        <FadeInSection forceVisible={forceFadeVisible}>
          <AreeLavoroSection />
        </FadeInSection>
        <FadeInSection forceVisible={forceFadeVisible}>
          <RisorseSection />
        </FadeInSection>
        <FadeInSection forceVisible={forceFadeVisible}>
          <CollaborazioniSection />
        </FadeInSection>
        <FadeInSection forceVisible={forceFadeVisible}>
          <ContattoSection />
        </FadeInSection>
      </main>
    </div>
  );
}