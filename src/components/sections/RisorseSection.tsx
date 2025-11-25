import { FileText, Headphones, ExternalLink } from "lucide-react";

export function RisorseSection() {
  const articoli = [
    {
      title: "Il valore sociale della cultura collaborativa",
      pubblicazione: "Doppiozero",
      anno: "2024",
      link: "#",
    },
    {
      title: "Valutare l'impatto: oltre i numeri",
      pubblicazione: "Che Fare",
      anno: "2023",
      link: "#",
    },
    {
      title: "Governance partecipativa nelle organizzazioni culturali",
      pubblicazione: "Fondazione Feltrinelli",
      anno: "2023",
      link: "#",
    },
  ];

  const podcast = [
    {
      title: "Commons & Care",
      episodi: "12 episodi",
      descrizione: "Conversazioni su beni comuni e pratiche di cura collettiva",
    },
    {
      title: "Design Sociale",
      episodi: "8 episodi",
      descrizione: "Il design come strumento di trasformazione sociale",
    },
  ];

  const materiali = [
    {
      title: "Toolkit progettazione partecipata",
      tipo: "PDF - 45 pagine",
      descrizione: "Strumenti e metodologie per processi partecipativi",
    },
    {
      title: "Guida alla valutazione d'impatto sociale",
      tipo: "PDF - 62 pagine",
      descrizione: "Framework e best practices per misurare l'impatto",
    },
    {
      title: "Template progettazione europea",
      tipo: "Pack risorse",
      descrizione: "Modelli e checklist per progetti EU",
    },
  ];

  return (
    <section id="risorse" className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="font-title text-foreground text-3xl lg:text-5xl tracking-tight mb-8">
            Risorse
          </h2>
        </div>

        {/* Articoli */}
        <div className="mb-24">
          <h3 className="font-title text-secondary  text-sm uppercase tracking-wider mb-8">
            Articoli
          </h3>
          <div className="space-y-6">
            {articoli.map((articolo, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-6 border-b border-black/10 last:border-0 hover:border-black/30 transition-colors cursor-pointer group"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 text-secondary group-hover:text-black transition-colors" />
                <div className="flex-1">
                  <h4 className="font-title text-foreground mb-1">
                    {articolo.title}
                  </h4>
                  <p className="font-body  text-sm text-secondary">
                    {articolo.pubblicazione} — {articolo.anno}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Podcast */}
        <div className="mb-24">
          <h3 className="font-title  text-sm uppercase tracking-wider mb-8 text-secondary">
            Podcast
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {podcast.map((pod, index) => (
              <div
                key={index}
                className="border border-black/10 p-8 hover:border-black/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Headphones className="w-5 h-5 flex-shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-title  mb-2">
                      {pod.title}
                    </h4>
                    <p className="font-body  text-xs text-secondary mb-3">
                      {pod.episodi}
                    </p>
                  </div>
                </div>
                <p className="font-body  text-sm text-secondary">
                  {pod.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Materiali scaricabili */}
        <div>
          <h3 className="font-title  text-sm uppercase tracking-wider mb-8 text-secondary">
            Materiali scaricabili
          </h3>
          <div className="space-y-6">
            {materiali.map((materiale, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-6 border-b border-black/10 last:border-0 hover:border-black/30 transition-colors cursor-pointer group"
              >
                <FileText className="w-5 h-5 flex-shrink-0 mt-1 text-secondary group-hover:text-black transition-colors" />
                <div className="flex-1">
                  <h4 className="font-title  mb-1">
                    {materiale.title}
                  </h4>
                  <p className="font-body  text-xs text-secondary mb-2">
                    {materiale.tipo}
                  </p>
                  <p className="font-body  text-sm text-secondary">
                    {materiale.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}