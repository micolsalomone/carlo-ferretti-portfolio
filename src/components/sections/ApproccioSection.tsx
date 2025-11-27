import { MobileStickySectionHeader } from "../MobileStickySectionHeader";

export function ApproccioSection() {
  const processo = [
    {
      step: "01",
      title: "Ascolto",
      description:
        "Analisi del contesto, mappatura degli stakeholder, comprensione profonda dei bisogni e delle dinamiche organizzative.",
    },
    {
      step: "02",
      title: "Co-progettazione",
      description:
        "Facilitazione di processi partecipativi, definizione condivisa di obiettivi e strategie, costruzione di visioni comuni.",
    },
    {
      step: "03",
      title: "Implementazione",
      description:
        "Accompagnamento operativo, definizione di strumenti e metodologie, supporto al cambiamento organizzativo.",
    },
    {
      step: "04",
      title: "Valutazione",
      description:
        "Misurazione dell'impatto sociale, raccolta di evidenze qualitative e quantitative, apprendimento continuo.",
    },
  ];

  const valori = [
    {
      title: "Cura",
      description:
        "Attenzione alle persone, ai processi, alle relazioni. Ogni progetto è un ecosistema di competenze e sensibilità.",
    },
    {
      title: "Ascolto",
      description:
        "La ricerca parte dall'ascolto attivo. Le soluzioni emergono dalla comprensione profonda dei contesti.",
    },
    {
      title: "Rigore",
      description:
        "Metodologie solide, approcci scientifici, documentazione accurata. La qualità è un impegno costante.",
    },
  ];

  return (
    <section id="approccio" className="py-32 section-back">
      <MobileStickySectionHeader title="Approccio" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="hidden lg:block font-title text-3xl lg:text-5xl tracking-tight mb-8">
            Approccio e Metodo
          </h2>
          <p className=" font-body text-lg text-secondary max-w-2xl leading-relaxed">
            Lavoro integrando competenze di design, ricerca sociale e management
            culturale. L'approccio è sistemico, partecipativo e orientato
            all'impatto.
          </p>
        </div>

        {/* Processo */}
        <div className="mb-32">
          <h3 className=" font-title text-sm uppercase tracking-wider mb-12 text-secondary">
            Il processo
          </h3>
          <div className="space-y-16">
            {processo.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <span className=" font-title text-4xl text-black/10">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className=" font-title text-2xl mb-3">
                    {item.title}
                  </h4>
                  <p className=" font-body text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valori */}
        <div>
          <h3 className="  text-sm uppercase tracking-wider mb-12 text-secondary">
            Valori e posture
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {valori.map((valore, index) => (
              <div key={index}>
                <h4 className="font-title text-foreground text-xl mb-4">
                  {valore.title}
                </h4>
                <p className=" font-body text-sm text-secondary leading-relaxed">
                  {valore.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}