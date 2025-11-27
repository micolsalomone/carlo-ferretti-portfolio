import { FileText, Headphones, ExternalLink } from "lucide-react";

import { MobileStickySectionHeader } from "../MobileStickySectionHeader";

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
      image: `${import.meta.env.BASE_URL}podcast/pois.jpg`,
    },
    {
      title: "Visioni",
      episodi: "",
      descrizione:
        "Visioni è un format di riflessione e costruzione di una nuova visione di futuro, per leggere la complessità del contemporaneo ed orientarci all’interno di quello che Byung-Chul Han definisce sciame digitale.",
      link: "https://www.spreaker.com/podcast/visioni--4958918",
      image: `${import.meta.env.BASE_URL}podcast/visioni.jpg`,
    },
    {
      title: "Kublai",
      episodi: "",
      descrizione:
        "Kublai è un podcast prodotto da Arti in Libertà ed Itinerari Paralleli, sostenuto dalla Fondazione Cariplo, che racconta come grandi eventi urbani, nello specifico le Capitali della Cultura, siano in grado di trasformare le nostre città e la vita dei suoi abitanti.",
      link: "https://www.spreaker.com/podcast/kublai--5763297",
      image: `${import.meta.env.BASE_URL}podcast/kublai.jpg`,
    },
    {
      title: "Zenit",
      episodi: "",
      descrizione:
        "Storie luminose di cultura, tecnologia e società. Dagli angoli remoti del nostro pianeta, ai grandi agglomerati dove l’energia vitale esplode e la vita sembra scorrere più velocemente, ci sono storie di scoperta, di cambiamento e di trasformazione.",
      link: "https://www.spreaker.com/podcast/zenit--6083099",
      image: `${import.meta.env.BASE_URL}podcast/zenit.jpg`,
    },
    {
      title: "STEAM Podcast",
      episodi: "",
      descrizione:
        "“STEAM: why arts matter” is a podcast for those people who want to understand how the arts contribute to our society and are revolutionizing future education. This podcast is part of the STEAMProcess project, an European Erasmus+ Project.",
      link: "",
      image: `${import.meta.env.BASE_URL}podcast/steam.jpg`,
    },
  ];

  const materiali = [
    {
      title: "Presentazione Udine - Generale - 12.05.25",
      tipo: "PDF",
      descrizione: "Presentazione generale Udine, 12 maggio 2025",
      link: `${import.meta.env.BASE_URL}materiali/Presentazione Udine - Generale - 12.05.25.pdf`,
    },
    {
      title: "AP2 Final Report",
      tipo: "PDF",
      descrizione: "Report finale progetto AP2",
      link: `${import.meta.env.BASE_URL}materiali/AP2 Final Report.pdf`,
    },
    {
      title: "Carlo Ferretti - BE PART - Europrogettazione - 04.11.24",
      tipo: "PDF",
      descrizione: "Materiale europrogettazione BE PART, 4 novembre 2024",
      link: `${import.meta.env.BASE_URL}materiali/Carlo Ferretti - BE PART - Europrogettazione - 04.11.24.pdf`,
    },
    {
      title: "Carlo Ferretti - UNeECC Annual Conference 2024",
      tipo: "PDF",
      descrizione: "Presentazione UNeECC Annual Conference 2024",
      link: `${import.meta.env.BASE_URL}materiali/Copy of Carlo Ferretti - UNeECC Annual Conference 2024.pdf`,
    },
    {
      title: "RAQAMA Handbook Program",
      tipo: "PDF",
      descrizione: "Handbook del programma RAQAMA",
      link: `${import.meta.env.BASE_URL}materiali/Copy of RAQAMA Handbook Program.pdf`,
    },
    {
      title: "Cos’è Kublai",
      tipo: "PDF",
      descrizione: "Documento informativo sul progetto Kublai",
      link: `${import.meta.env.BASE_URL}materiali/Cos’è Kublai.pdf`,
    },
    {
      title: "DROP_D2.1 Conceptual design of the Co-governance Methodology through the CCIs_Final Version",
      tipo: "PDF",
      descrizione: "Conceptual design della metodologia di co-governance tramite le CCIs",
      link: `${import.meta.env.BASE_URL}materiali/DROP_D2.1 Conceptual design of the Co-governance Methodology through the CCIs_Final Version.pdf`,
    },
    {
      title: "Handbook 3_ENG",
      tipo: "PDF",
      descrizione: "Handbook in inglese, versione 3",
      link: `${import.meta.env.BASE_URL}materiali/Handbook 3_ENG.pdf`,
    },
    {
      title: "magma fest programma",
      tipo: "PDF",
      descrizione: "Programma del Magma Fest",
      link: `${import.meta.env.BASE_URL}materiali/magma fest programma.pdf`,
    },
  ];

  return (
    <section id="media" className="py-32 section-back">
      <MobileStickySectionHeader title="Media" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="hidden lg:block font-title text-section text-3xl lg:text-5xl tracking-tight mb-8">
            Media
          </h2>
        </div>

        {/* Articoli */}
        <div className="mb-24">
          <h3 className="font-title text-section-secondary text-sm uppercase tracking-wider mb-8">
            Articoli
          </h3>
          <div className="space-y-6">
            {articoli.map((articolo, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-6 border-b border-black/10 last:border-0 hover:border-black/30 transition-colors cursor-pointer group"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 text-section-secondary group-hover:text-black transition-colors" />
                <div className="flex-1">
                  <h4 className="font-title text-section mb-1">
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
                  <p className="font-body text-sm text-section-secondary">
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
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-section-secondary">
            Podcast
          </h3>
          <div className="grid grid-cols-1 gap-10">
            {podcast.map((pod, index) => (
              <div
                key={index}
                className="border border-black/10 rounded-lg hover:border-black/30 transition-colors cursor-pointer bg-background flex flex-col lg:flex-row items-start p-8 gap-8 min-h-[220px]"
              >
                {/* Immagine quadrata e responsive */}
                {pod.image && (
                  <div className="aspect-square w-full lg:w-44 bg-black/5 flex items-center justify-center overflow-hidden rounded-md mb-6 lg:mb-0">
                    <img
                      src={pod.image}
                      alt={pod.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-6 h-6 text-section-secondary" />
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
                    <p className="font-body text-sm text-section-secondary mb-2">
                      {pod.episodi}
                    </p>
                  )}
                  <p className="font-body text-base text-section-secondary">
                    {pod.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materiali scaricabili */}
        <div>
          <h3 className="font-title text-sm uppercase tracking-wider mb-8 text-section-secondary">
            Materiali scaricabili
          </h3>
          <div className="space-y-6">
            {materiali.map((materiale, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-6 border-b border-black/10 last:border-0 hover:border-black/30 transition-colors cursor-pointer group"
              >
                <FileText className="w-5 h-5 flex-shrink-0 mt-1 text-section-secondary group-hover:text-black transition-colors" />
                <div className="flex-1">
                  <h4 className="font-title mb-1">
                    {materiale.link ? (
                      <a
                        href={materiale.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent underline transition-colors"
                      >
                        {materiale.title}
                      </a>
                    ) : (
                      materiale.title
                    )}
                  </h4>
                  <p className="font-body text-xs text-section-secondary mb-2">
                    {materiale.tipo}
                  </p>
                  <p className="font-body text-sm text-section-secondary">
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