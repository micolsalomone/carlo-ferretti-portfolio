import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../ProjectCard";
import { NewsletterBox } from "../NewsletterBox";

export function HeroSection() {
  const areeAttivita = [
    {
      name: "Ricerca",
      id: "area-ricerca",
      icon: "/ricerca.png",
    },
    {
      name: "Valutazione Impatto Sociale",
      id: "area-valutazione",
      icon: "/impatto-sociale.png",
    },
    {
      name: "Progettazione Europea",
      id: "area-progettazione",
      icon: "/progettaz-europea.png",
    },
    {
      name: "Management Economia Sociale",
      id: "area-management",
      icon: "/management.png",
    },
    {
      name: "Formazione",
      id: "area-formazione",
      icon: "/formazione.png",
    },
    {
      name: "Media & Talk",
      id: "area-media",
      icon: "/media.png",
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
      title: "Che Fare",
      category: "Progettazione",
      year: "2024",
    },
    {
      title: "Feltrinelli Education",
      category: "Didattica",
      year: "2023-2024",
    },
    {
      title: "EIT",
      category: "Ricerca",
      year: "2022-2024",
    },
  ];

  // Sostituisci la variabile partner con la nuova lista
  const partner = [
    {
      name: "BASE Milano",
      role: "responsabile progetti internazionali",
      url: "https://base.milano.it",
    },
    {
      name: "Fondazione Giangiacomo Feltrinelli",
      role: "responsabile Dipartimento Territori",
      url: "https://fondazionefeltrinelli.it",
    },
    {
      name: "FROM",
      role: "Consulente Progettista",
      url: "https://www.from.cm/",
    },
    {
      name: "Materahub",
      role: "Responsabile Ricerca e Sviluppo",
      url: "https://www.materahub.com",
    },
  ];

  return (
    <section id="home" className="w-full bg-background pt-12 lg:pt-24 pb-0">
      {/* Hero Top: foto a sinistra, testo a destra */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-start gap-12 pb-2">
        {/* Foto */}
        <div className="flex-shrink-0 w-full max-w-[340px] aspect-[3/4] bg-black/5 rounded-lg flex items-center justify-center overflow-hidden lg:mr-8">
          <img
            src="/portrait.png"
            alt="Carlo Ferretti"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        {/* Testo */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="font-title text-foreground text-[60px] leading-[75px] tracking-[-1.5px] mb-8 max-w-3xl"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Città, cultura,
            <br />
            innovazione e sud.
          </h2>
          <p
            className="font-body text-[20px] leading-[31.25px] mb-6 text-foreground"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Mi occupo di progettazione strategica, valutazione d'impatto e sviluppo di ecosistemi collaborativi nel terzo settore e nell'economia sociale.<br />
            Scrivo progetti e policy per una società più equa.
          </p>
        
          {/* Barra tematica pill buttons - integrata sotto il testo */}
          <div className="w-full mt-6">
            <div className="flex flex-wrap gap-6">
              {areeAttivita.map((area, index) => (
                <button
                  key={index}
                  onClick={() => scrollToArea(area.id)}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer font-title text-foreground text-base"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  <span className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={area.icon}
                      alt=""
                      className="w-full h-full object-contain opacity-70"
                      draggable={false}
                    />
                  </span>
                  {area.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Progetti in evidenza */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-32">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-title text-sm uppercase tracking-wider text-secondary">
            Progetti in evidenza
          </h3>
          <a
            href="#progetti"
            className="font-body text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
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

        {/* Partner */}
        <div className="mt-24 mb-32">
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-secondary">
            Organizzazioni con cui collaboro attualmente
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12">
            {partner.map((org, index) => (
              <span key={index} className="font-body text-sm text-secondary" title={org.name}>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {org.name}
                </a>
                <span className="ml-2 text-secondary">({org.role})</span>
              </span>
            ))}
          </div>
          {/* Nuova sezione: Organizzazioni che gestisco attualmente */}
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-secondary">
            Organizzazioni che gestisco attualmente
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <span className="font-body text-sm text-secondary" title="3DXR">
              <a
                href="https://3dxr.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-accent transition-colors"
              >
                3DXR
              </a>
              <span className="ml-2 text-secondary">(fondatore)</span>
            </span>
            <span className="font-body text-sm text-secondary" title="Spazio13">
              <a
                href="https://www.spazio13.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-accent transition-colors"
              >
                Spazio13
              </a>
              <span className="ml-2 text-secondary">(Presidente)</span>
            </span>
            <span className="font-body text-sm text-secondary" title="Arti in Libertà">
              <span className="font-semibold text-foreground">Arti in Libertà</span>
              <span className="ml-2 text-secondary">(fondatore)</span>
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterBox />
      </div>
    </section>
  );
}