import { FileText, ExternalLink } from "lucide-react";

export function AreeLavoroSection() {
  const aree = [
    {
      id: "area-ricerca",
      title: "Ricerca",
      icon: "/ricerca.png",
      iconStyles: {
        height: "189.09%",
        left: "-0.27%",
        top: "-6.26%",
        width: "201.61%"
      },
      intro:
        "Ricerca qualitativa e quantitativa su economia sociale, innovazione culturale, pratiche collaborative.",
      progetti: ["Social Innovation Lab", "Mappe della Cultura", "Commons Research"],
      materiali: [
        { title: "Metodologie di ricerca partecipata", type: "PDF" },
        { title: "Report annuale 2024", type: "PDF" },
      ],
      collaborazioni: ["Università di Bologna", "Fondazione Feltrinelli"],
    },
    {
      id: "area-valutazione",
      title: "Valutazione impatto sociale",
      icon: "/impatto-sociale.png",
      iconStyles: {
        height: "189.09%",
        left: "-92.07%",
        top: "-6.26%",
        width: "201.61%"
      },
      intro:
        "Progettazione e implementazione di sistemi di misurazione dell'impatto per organizzazioni del terzo settore.",
      progetti: ["Impact Framework", "Valutazione Beni Comuni", "Social ROI"],
      materiali: [
        { title: "Toolkit valutazione impatto", type: "PDF" },
        { title: "Case study valutazione", type: "Link" },
      ],
      collaborazioni: ["AICCON", "Forum Terzo Settore"],
    },
    {
      id: "area-progettazione",
      title: "Progettazione europea",
      icon: "/progettaz-europea.png",
      iconStyles: {
        height: "189.09%",
        left: "-0.27%",
        top: "-94.52%",
        width: "201.61%"
      },
      intro:
        "Supporto alla progettazione, scrittura e gestione di progetti finanziati da programmi europei.",
      progetti: ["Creative Europe", "Erasmus+ KA2", "Horizon Network"],
      materiali: [
        { title: "Guida alla progettazione europea", type: "PDF" },
      ],
      collaborazioni: ["Impact Hub", "European Cultural Foundation"],
    },
    {
      id: "area-management",
      title: "Management economia sociale",
      icon: "/management.png",
      iconStyles: {
        objectPosition: "50% 50%",
        objectFit: "cover"
      },
      intro:
        "Consulenza strategica e organizzativa per cooperative, imprese sociali, fondazioni.",
      progetti: ["Governance cooperativa", "Modelli ibridi", "Transition Lab"],
      materiali: [{ title: "Toolkit governance partecipativa", type: "PDF" }],
      collaborazioni: ["Legacoop", "Fondazione Cariplo"],
    },
    {
      id: "area-formazione",
      title: "Formazione",
      icon: "/formazione.png",
      iconStyles: {
        height: "100%",
        left: "6.3%",
        top: "0",
        width: "182.91%"
      },
      intro:
        "Percorsi formativi su design thinking, valutazione, progettazione partecipata.",
      progetti: [
        "Workshop Design & Impact",
        "Corso Progettazione UE",
        "Summer School",
      ],
      materiali: [{ title: "Programmi formativi 2025", type: "PDF" }],
      collaborazioni: ["IED", "Politecnico di Milano"],
    },
    {
      id: "area-media",
      title: "Media & Talk",
      icon: "/media.png",
      iconStyles: {
        height: "100%",
        left: "-85.12%",
        top: "0",
        width: "182.91%"
      },
      intro:
        "Podcast, articoli, talk pubblici su temi di innovazione sociale e cultura.",
      progetti: ["Podcast Commonfare", "Rubrica su Che Fare", "TEDx Bologna"],
      materiali: [
        { title: "Archivio podcast", type: "Link" },
        { title: "Articoli pubblicati", type: "Link" },
      ],
      collaborazioni: ["Che Fare", "Doppiozero"],
    },
  ];

  return (
    <section id="aree" className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className=" font-title text-section text-3xl lg:text-5xl tracking-tight mb-8">
            Aree di lavoro
          </h2>
        </div>

        <div className="space-y-32">
          {aree.map((area, index) => (
            <div key={index} id={area.id} className="pb-16 border-b border-black/10 last:border-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[122px] h-[72px] opacity-40 relative flex-shrink-0 overflow-hidden">
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
                <h3 className=" font-title text-section text-3xl">
                  {area.title}
                </h3>
              </div>
              <p className=" font-body text-secondary mb-12 leading-relaxed max-w-2xl">
                {area.intro}
              </p>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Progetti */}
                <div>
                  <h4 className="font-title text-secondary text-sm uppercase tracking-wider mb-4">
                    Progetti collegati
                  </h4>
                  <ul className="space-y-2">
                    {area.progetti.map((progetto, i) => (
                      <li
                        key={i}
                        className=" font-body text-sm"
                      >
                        {progetto}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materiali */}
                <div>
                  <h4 className="font-title text-sm uppercase tracking-wider mb-4 text-secondary">
                    Materiali
                  </h4>
                  <ul className="space-y-3">
                    {area.materiali.map((materiale, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {materiale.type === "PDF" ? (
                          <FileText className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                        ) : (
                          <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                        )}
                        <span className=" font-body text-foreground text-sm hover:underline cursor-pointer">
                          {materiale.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collaborazioni */}
                <div>
                  <h4 className="font-title text-sm uppercase tracking-wider mb-4 text-secondary">
                    Collaborazioni
                  </h4>
                  <ul className="space-y-2">
                    {area.collaborazioni.map((collab, i) => (
                      <li
                        key={i}
                        className=" font-body text-sm text-secondary"
                      >
                        {collab}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}