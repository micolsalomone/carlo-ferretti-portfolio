import { ArrowRight } from "lucide-react";

export function ProgettiSection() {
  const progetti = [
    {
      title: "3DXR",
      category: "Innovazione tecnologica",
      year: "2024",
      description:
        "Ricerca applicata su tecnologie immersive per la fruizione culturale.",
      tags: ["Ricerca", "XR", "Cultura"],
    },
    {
      title: "Labsus",
      category: "Beni comuni",
      year: "2023-2024",
      description:
        "Supporto alla rete nazionale dei Patti di collaborazione per i beni comuni urbani.",
      tags: ["Governance", "Amministrazione condivisa"],
    },
    {
      title: "Che Fare",
      category: "Cultura e innovazione",
      year: "2022-2024",
      description:
        "Valutazione d'impatto e advisory strategico per la piattaforma di innovazione culturale.",
      tags: ["Valutazione", "Strategia", "Cultura"],
    },
    {
      title: "Social Innovation Lab",
      category: "Ricerca partecipata",
      year: "2023",
      description:
        "Laboratorio di co-design per lo sviluppo di servizi innovativi nel terzo settore.",
      tags: ["Design", "Partecipazione"],
    },
    {
      title: "Commons Network",
      category: "Economia collaborativa",
      year: "2022-2023",
      description:
        "Mappatura e analisi di pratiche collaborative in Europa.",
      tags: ["Ricerca", "Mapping", "Europa"],
    },
    {
      title: "Impact Framework",
      category: "Valutazione",
      year: "2021-2024",
      description:
        "Sviluppo di un sistema di misurazione dell'impatto sociale per fondazioni.",
      tags: ["Valutazione", "Strumenti"],
    },
  ];

  return (
    <section id="progetti" className="py-32 bg-black/[0.02]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className=" font-title text-3xl lg:text-5xl tracking-tight mb-8">
            Progetti
          </h2>
          <p className=" font-body text-lg text-black/60 max-w-2xl leading-relaxed">
            Una selezione di progetti sviluppati negli ultimi anni, tra ricerca,
            consulenza e facilitazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {progetti.map((progetto, index) => (
            <div
              key={index}
              className="group cursor-pointer border-b border-black/10 pb-8 hover:border-black/30 transition-colors"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-title  text-xl">
                    {progetto.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                </div>
                <p className=" font-body text-sm text-black/60 mb-1">
                  {progetto.category}
                </p>
                <p className=" font-body text-xs text-black/40">
                  {progetto.year}
                </p>
              </div>

              <p className=" font-body text-sm text-black/60 mb-4 leading-relaxed">
                {progetto.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {progetto.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-black/10 font-body text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}