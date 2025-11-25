import { FileText, Headphones, ExternalLink } from "lucide-react";

export function RisorseSection() {
  const articoli = [
    {
      title: "Articoli su Che Fare",
      pubblicazione: "Che Fare",
      anno: "",
      link: "https://che-fare.com/network/carlo-ferretti",
    },
    {
      title: "Articoli su Labsus",
      pubblicazione: "Labsus",
      anno: "",
      link: "https://www.labsus.org/author/carlo-ferretti/",
    },
    {
      title: "Articolo su Domus",
      pubblicazione: "Domus",
      anno: "",
      link: "",
    },
  ];

  const podcast = [
    {
      title: "POIS",
      episodi: "",
      descrizione:
        "POIS ricerca, approfondisce e racconta in voce l’innovazione sociale e culturale in Italia. Attraverso interviste con innovatori sociali ed esperti del settore, esploriamo idee rivoluzionarie e diffondiamo storie di chi, giorno per giorno, s’impegna per rendere questo paese un posto migliore.",
      link: "https://www.spreaker.com/podcast/pois-podcast-sull-innovazione-sociale--3204876",
      image: "/podcast/pois.jpg",
    },
    {
      title: "Visioni",
      episodi: "",
      descrizione:
        "Visioni è un format di riflessione e costruzione di una nuova visione di futuro, per leggere la complessità del contemporaneo ed orientarci all’interno di quello che Byung-Chul Han definisce sciame digitale.",
      link: "https://www.spreaker.com/podcast/visioni--4958918",
      image: "/podcast/visioni.jpg",
    },
    {
      title: "Kublai",
      episodi: "",
      descrizione:
        "Kublai è un podcast prodotto da Arti in Libertà ed Itinerari Paralleli, sostenuto dalla Fondazione Cariplo, che racconta come grandi eventi urbani, nello specifico le Capitali della Cultura, siano in grado di trasformare le nostre città e la vita dei suoi abitanti.",
      link: "https://www.spreaker.com/podcast/kublai--5763297",
      image: "/podcast/kublai.jpg",
    },
    {
      title: "Zenit",
      episodi: "",
      descrizione:
        "Storie luminose di cultura, tecnologia e società. Dagli angoli remoti del nostro pianeta, ai grandi agglomerati dove l’energia vitale esplode e la vita sembra scorrere più velocemente, ci sono storie di scoperta, di cambiamento e di trasformazione.",
      link: "https://www.spreaker.com/podcast/zenit--6083099",
      image: "/podcast/zenit.jpg",
    },
    {
      title: "STEAM Podcast",
      episodi: "",
      descrizione:
        "“STEAM: why arts matter” is a podcast for those people who want to understand how the arts contribute to our society and are revolutionizing future education. This podcast is part of the STEAMProcess project, an European Erasmus+ Project.",
      link: "",
      image: "/podcast/steam.jpg",
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
    <section id="media" className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="font-title text-foreground text-3xl lg:text-5xl tracking-tight mb-8">
            Media
          </h2>
        </div>

        {/* Articoli */}
        <div className="mb-24">
          <h3 className="font-title text-secondary text-sm uppercase tracking-wider mb-8">
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
                    {articolo.link ? (
                      <a
                        href={articolo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent underline transition-colors"
                      >
                        {articolo.title}
                      </a>
                    ) : (
                      articolo.title
                    )}
                  </h4>
                  <p className="font-body text-sm text-secondary">
                    {articolo.pubblicazione}
                    {articolo.anno ? ` — ${articolo.anno}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Podcast */}
        <div className="mb-24">
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-secondary">
            Podcast
          </h3>
          <div className="grid grid-cols-1 gap-10">
            {podcast.map((pod, index) => (
              <div
                key={index}
                className="border border-black/10 rounded-lg hover:border-black/30 transition-colors cursor-pointer bg-background flex flex-row items-start p-8 gap-8 min-h-[220px]"
              >
                {/* Immagine quadrata, più grande */}
                {pod.image && (
                  <div className="w-44 h-44 min-w-[11rem] min-h-[11rem] bg-black/5 flex items-center justify-center overflow-hidden rounded-md">
                    <img
                      src={pod.image}
                      alt={pod.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-6 h-6 text-secondary" />
                    <h4 className="font-title mb-0 text-2xl">
                      {pod.link ? (
                        <a
                          href={pod.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent underline transition-colors"
                        >
                          {pod.title}
                        </a>
                      ) : (
                        pod.title
                      )}
                    </h4>
                  </div>
                  {pod.episodi && (
                    <p className="font-body text-sm text-secondary mb-2">
                      {pod.episodi}
                    </p>
                  )}
                  <p className="font-body text-base text-secondary">
                    {pod.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materiali scaricabili */}
        <div>
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-secondary">
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
                  <h4 className="font-title mb-1">
                    {materiale.title}
                  </h4>
                  <p className="font-body text-xs text-secondary mb-2">
                    {materiale.tipo}
                  </p>
                  <p className="font-body text-sm text-secondary">
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