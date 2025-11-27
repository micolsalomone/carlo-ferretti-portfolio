import { MobileStickySectionHeader } from "../MobileStickySectionHeader";

export function HeroSection() {
  const areeAttivita = [
    { name: "Ricerca", id: "area-ricerca", icon: "ricerca.png" },
    { name: "Valutazione Impatto Sociale", id: "area-valutazione", icon: "impatto-sociale.png" },
    { name: "Progettazione Europea", id: "area-progettazione", icon: "progettaz-europea.png" },
    { name: "Management Economia Sociale", id: "area-management", icon: "management.png" },
    { name: "Formazione", id: "area-formazione", icon: "formazione.png" },
    { name: "Media & Talk", id: "area-media", icon: "media.png" },
  ];

  const scrollToArea = (areaId: string) => {
    const element = document.getElementById(areaId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const partner = [
    { name: "BASE Milano", role: "responsabile progetti internazionali", url: "https://base.milano.it" },
    { name: "Fondazione Giangiacomo Feltrinelli", role: "responsabile Dipartimento Territori", url: "https://fondazionefeltrinelli.it" },
    { name: "FROM", role: "Consulente Progettista", url: "https://www.from.cm/" },
    { name: "Materahub", role: "Responsabile Ricerca e Sviluppo", url: "https://www.materahub.com" },
  ];

  const gestite = [
    { name: "3DXR", role: "fondatore", url: "https://3dxr.eu/" },
    { name: "Spazio13", role: "Presidente", url: "https://www.spazio13.eu" },
    { name: "Arti in Libertà", role: "fondatore", url: "" },
  ];

  return (
    <section id="home" className="w-full bg-background pt-12 lg:pt-24 pb-0">
      <MobileStickySectionHeader title="Chi sono" showOnScrollOnly />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-start gap-12 pb-2">
        {/* Foto */}
        <div className="flex-shrink-0 w-full max-w-[340px] aspect-[3/4] bg-black/5 rounded-lg flex items-center justify-center overflow-hidden lg:mr-8">
          <img src={`${import.meta.env.BASE_URL}illustration.jpg`} alt="Carlo Ferretti" className="w-full h-full object-cover" />
        </div>
        {/* Testo e partner */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-title text-foreground text-[60px] leading-[75px] tracking-[-1.5px] mb-6 max-w-3xl">
            Città, cultura,<br />innovazione e sud.
          </h1>
          <p className="font-body text-[20px] leading-[31.25px] mb-8 text-foreground">
            Mi occupo di progettazione strategica, valutazione d'impatto e sviluppo di ecosistemi collaborativi nel terzo settore e nell'economia sociale.<br />
            Scrivo progetti e policy per una società più equa.
          </p>
          {/* Partner */}
          <div className="mb-8">
            <h2 className="font-title text-sm uppercase tracking-wider mb-3 text-secondary">
              Collaborazioni attive
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
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
            <h2 className="font-title text-sm uppercase tracking-wider mb-3 text-secondary">
              Gestore e fondatore di
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {gestite.map((org, index) => (
                <span key={index} className="font-body text-sm text-secondary" title={org.name}>
                  {org.url ? (
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {org.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground">{org.name}</span>
                  )}
                  <span className="ml-2 text-secondary">({org.role})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pillole categorie */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-20 mb-20">
        <h2 className="font-title text-base uppercase tracking-wider mb-8 text-secondary text-center">
          Aree di attività
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {areeAttivita.map((area, index) => (
            <button
              key={index}
              onClick={() => scrollToArea(area.id)}
              className="flex items-center gap-5 px-8 py-4 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer font-title text-foreground text-xl"
              style={{
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              <span className="w-16 h-16 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${area.icon}`}
                  alt=""
                  className="w-full h-full object-contain opacity-80"
                  draggable={false}
                />
              </span>
              {area.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}