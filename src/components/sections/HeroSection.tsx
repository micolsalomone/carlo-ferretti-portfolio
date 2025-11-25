import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../ProjectCard";
import { NewsletterBox } from "../NewsletterBox";

export function HeroSection() {
  const areeAttivita = [
    {
      name: "Ricerca",
      id: "area-ricerca",
      icon: "/ricerca.png",
      iconStyles: {
        height: "189.09%",
        left: "-0.27%",
        top: "-6.26%",
        width: "201.61%"
      }
    },
    {
      name: "Valutazione Impatto Sociale",
      id: "area-valutazione",
      icon: "/impatto-sociale.png",
      iconStyles: {
        height: "189.09%",
        left: "-92.07%",
        top: "-6.26%",
        width: "201.61%"
      }
    },
    {
      name: "Progettazione Europea",
      id: "area-progettazione",
      icon: "/progettaz-europea.png",
      iconStyles: {
        height: "189.09%",
        left: "-0.27%",
        top: "-94.52%",
        width: "201.61%"
      }
    },
    {
      name: "Management Economia Sociale",
      id: "area-management",
      icon: "/management.png",
      iconStyles: {
        objectPosition: "50% 50%",
        objectFit: "cover"
      }
    },
    {
      name: "Formazione",
      id: "area-formazione",
      icon: "/formazione.png",
      iconStyles: {
        height: "100%",
        left: "6.3%",
        top: "0",
        width: "182.91%"
      }
    },
    {
      name: "Media & Talk",
      id: "area-media",
      icon: "/media.png",
      iconStyles: {
        height: "100%",
        left: "-85.12%",
        top: "0",
        width: "182.91%"
      }
    },
  ];

  const scrollToArea = (areaId: string) => {
    const element = document.getElementById(areaId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const progettiEvidenza = [
    {
      title: "3DXR",
      category: "Innovazione tecnologica",
      year: "2024",
    },
    {
      title: "Labsus",
      category: "Beni comuni",
      year: "2023-2024",
    },
    {
      title: "Che Fare",
      category: "Cultura e innovazione",
      year: "2022-2024",
    },
  ];

  const partner = [
    "Fondazione Feltrinelli",
    "AICCON",
    "Università di Bologna",
    "Forum Terzo Settore",
    "Fondazione Cariplo",
    "Impact Hub",
  ];

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="mb-32">
          <h2 
            className=" font-title text-[60px] leading-[75px] tracking-[-1.5px] mb-8 max-w-3xl"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Città, cultura,
            <br />
            innovazione e sud.
          </h2>
          <div className="h-px bg-black/10 mb-16" />
          
          {/* Intro with portrait */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2">
              <p 
                className=" font-body text-[18px] leading-[29.25px] mb-6"
                style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                Mi occupo di progettazione strategica, valutazione d'impatto e sviluppo di ecosistemi collaborativi nel terzo settore e nell'economia sociale. Scrivo progetti e policy per una società più equa.
              </p>
              <p 
                className=" font-body text-[18px] leading-[29.25px] text-black/60"
                style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                Lavoro tra ricerca accademica, consulenza e formazione, integrando approcci partecipativi e strumenti di design per organizzazioni, istituzioni e reti culturali.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-black/5 flex items-center justify-center">
                <img
                  src="/portrait.png"
                  alt="Carlo Ferretti"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mappa aree di attività */}
        <div className="mb-32">
          <h3 className=" font-title text-sm uppercase tracking-wider mb-8 text-black/60">
            Aree di attività
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {areeAttivita.map((area, index) => (
              <button
                key={index}
                onClick={() => scrollToArea(area.id)}
                className="border border-black/10 p-6 hover:border-black/30 transition-colors duration-200 cursor-pointer flex items-center gap-2 text-left w-full"
              >
                <div className="w-[61px] h-[36px] opacity-40 relative flex-shrink-0 overflow-hidden">
                  <img
                    src={area.icon}
                    alt=""
                    className="absolute inset-0 size-full max-w-none pointer-events-none"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <p className="font-title  flex-1">
                  {area.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Progetti in evidenza */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-title  text-sm uppercase tracking-wider text-black/60">
              Progetti in evidenza
            </h3>
            <a
              href="#progetti"
              className="font-body  text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
            >
              Vedi tutti
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {progettiEvidenza.map((progetto, index) => (
              <ProjectCard
                key={index}
                title={progetto.title}
                category={progetto.category}
                year={progetto.year}
              />
            ))}
          </div>
        </div>

        {/* Partner */}
        <div className="mb-32">
          <h3 className=" font-title text-sm uppercase tracking-wider mb-8 text-black/60">
            Organizzazioni partner
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {partner.map((org, index) => (
              <span
                key={index}
                className=" font-body text-sm text-black/60"
              >
                {org}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterBox />
      </div>
    </section>
  );
}