import { ArrowRight } from "lucide-react";

const clusters = [
  {
    name: "Management",
    projects: [
      {
        title: "Cantieri Spaziali",
        description: "Curatela dell’offerta didattica e Coordinamento del Programma Formativo dell’area Cultura.",
        url: "https://www.comune.bari.it/-/cantieri-spaziali-presentati-il-cantiere-di-trasformazione-del-community-hub-spazio13-e-le-attivita-di-coinvolgimento-dei-giovani-del-quartiere-libert",
        year: "2023-2024",
      },
      {
        title: "MAGMA",
        description: "Curatela e Gestione del Festival MAGMA, dal 2022.",
        url: "https://www.magmafest.it/",
        year: "2022-2024",
      },
      {
        title: "Community Opera",
        description: "Coordinamento e Valutazione d’impatto del progetto Community Opera.",
        url: "https://www.communityopera.it/",
        year: "2023-2024",
      },
      {
        title: "Comm.Unity.Lab (URBACT)",
        description: "Coordinamento del progetto URBACT Comm.Unity.Lab per il comune di Bari.",
        url: "https://urbact.eu/networks/comunitylab",
        year: "2022-2023",
      },
      {
        title: "Restory",
        description: "Coordinamento del WP5 del progetto di ricerca Restory, Horizon Europe.",
        url: "https://restory-heritage.eu/",
        year: "2023-2024",
      },
      {
        title: "Genera Festival",
        description: "Coordinamento del Genera Festival 2020, festival di musica e arte visiva, a Cisternino.",
        url: "https://www.instagram.com/generafestival/",
        year: "2020",
      },
      {
        title: "Spazio13",
        description: "Coordinamento del Consiglio Direttivo dell’ETS Spazio 13.",
        year: "2018-2024",
      },
    ],
  },
  {
    name: "Progettazione",
    projects: [
      {
        title: "Fondazione Changes",
        description: "Progettazione su Horizon Europe, digitalizzazione del patrimonio.",
        url: "https://research-and-innovation.ec.europa.eu/research-area/social-sciences-and-humanities/cultural-heritage-and-cultural-and-creative-industries-ccis/cultural-heritage-cloud_en",
        year: "2023-2024",
      },
      {
        title: "BASE Milano",
        description: "Progettazione su Erasmus+ e Creative Europe, impatto internazionale.",
        year: "2022-2024",
      },
      {
        title: "LAMA Impresa Sociale",
        description: "Progettazione su Creative Europe, spazi verdi urbani come area di produzione culturale.",
        year: "2022-2024",
      },
      {
        title: "Comune di Cinisello Balsamo",
        description: "Progettazione su URBACT.",
        url: "https://urbact.eu/networks/ur-impact",
        year: "2022-2024",
      },
      {
        title: "Uni Salerno",
        description: "Progettazione su Horizon Europe.",
        year: "2022-2024",
      },
      {
        title: "Materahub",
        description: "Progettazione europea in vari ambiti.",
        year: "2018-2024",
      },
    ],
  },
  {
    name: "Ricerca",
    projects: [
      { title: "Atlante ICC", description: "", year: "" },
      { title: "Federculture Giochi Storici", description: "", year: "" },
      { title: "EIT", description: "", year: "" },
      { title: "Cipro", description: "", year: "" },
      { title: "BIS Bari", description: "", year: "" },
      { title: "DROP", description: "", year: "" },
      { title: "IMPACTOUR", description: "", year: "" },
      { title: "GreenCCIrcle", description: "", year: "" },
      { title: "Learning Trajectories", description: "", year: "" },
      { title: "Social Value of Community Opera", description: "", year: "" },
      { title: "Generative AI Academy", description: "", year: "" },
      { title: "Multidimensional Approach to Socio-cultural evaluation", description: "", year: "" },
      { title: "Toscana Promozione", description: "", year: "" },
      { title: "Just Fashion", description: "", year: "" },
    ],
  },
  {
    name: "VIS (Valutazione d’impatto)",
    projects: [
      { title: "Lo Stabile", description: "", year: "" },
      { title: "Nuto Revelli", description: "", year: "" },
      { title: "Coltuour Data", description: "", year: "" },
      { title: "Silent City", description: "", year: "" },
      { title: "BIS Bari", description: "", year: "" },
      { title: "Value Based Approach", description: "", year: "" },
      { title: "Just Fashion", description: "", year: "" },
    ],
  },
  {
    name: "Didattica",
    projects: [
      { title: "Feltrinelli Education", description: "", year: "" },
      { title: "XYZ", description: "", year: "" },
      { title: "School of Sustainability", description: "", year: "" },
      { title: "Kroton", description: "", year: "" },
      { title: "ISP", description: "", year: "" },
      { title: "Bocconi", description: "", year: "" },
      { title: "Festival Portogallo", description: "", year: "" },
      { title: "Formazione BASE Milano VIS", description: "", year: "" },
      { title: "Formazione Albero VIS", description: "", year: "" },
      { title: "Tutorship Collab", description: "", year: "" },
      { title: "Tutorship Piemonte Movie", description: "", year: "" },
      { title: "BE PART", description: "", year: "" },
      { title: "Indire", description: "", year: "" },
      { title: "Workshop Vitalenta", description: "", year: "" },
      { title: "Workshop Apical", description: "", year: "" },
      { title: "Università di Parma", description: "", year: "" },
      { title: "Workshop Futuri Emergenti", description: "", year: "" },
      { title: "Conversazioni sulla Co-creazione", description: "", year: "" },
      { title: "Galattica Gravina", description: "", year: "" },
      { title: "Liceo Milani", description: "", year: "" },
      { title: "Distretto Puglia Creativa", description: "", year: "" },
      { title: "Podcasting School", description: "", year: "" },
    ],
  },
  {
    name: "Talking",
    projects: [
      { title: "Regione Friuli Venezia Giulia", description: "", year: "" },
      { title: "UFM", description: "", year: "" },
      { title: "Distretto Puglia Creativa", description: "", year: "" },
      { title: "Festival Social Housing", description: "", year: "" },
      { title: "Arte e Scienza per MTHUB", description: "", year: "" },
      { title: "Future4cities", description: "", year: "" },
      { title: "TED x Barletta", description: "", year: "" },
      { title: "LAB Ravenna", description: "", year: "" },
      { title: "Università Romania", description: "", year: "" },
      { title: "NEB Conexiones Improbables", description: "", year: "" },
      { title: "METALAB", description: "", year: "" },
      { title: "R2B NEB", description: "", year: "" },
      { title: "R2B Zenit", description: "", year: "" },
      { title: "EIT & Competenze Bologna", description: "", year: "" },
      { title: "Malmo", description: "", year: "" },
      { title: "ACT Bari", description: "", year: "" },
      { title: "ACT Amsterdam", description: "", year: "" },
    ],
  },
  {
    name: "3DXR",
    projects: [
      { title: "Caserta", description: "", year: "" },
      { title: "Raqama", description: "", year: "" },
    ],
  },
];

export function ProgettiSection() {
  return (
    <section id="progetti" className="py-32 section-back">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-section font-title text-3xl lg:text-5xl tracking-tight mb-8">
            Progetti
          </h2>
          <p className="font-body text-lg text-section-secondary max-w-2xl leading-relaxed">
            Selezione di progetti sviluppati negli ultimi anni, suddivisi per cluster di pratiche.
          </p>
        </div>

        <div className="space-y-16">
          {clusters.map((cluster, idx) => (
            <div key={idx}>
              <h3 className="font-title text-lg text-section mb-6">{cluster.name}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cluster.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="border border-black/10 rounded-lg p-5 flex flex-col justify-between hover:border-black/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-title text-section text-base font-semibold">
                          {proj.url ? (
                            <a
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent underline transition-colors"
                            >
                              {proj.title}
                            </a>
                          ) : (
                            proj.title
                          )}
                        </h4>
                        {proj.year && (
                          <span className="font-body text-xs text-section-secondary ml-2">
                            {proj.year}
                          </span>
                        )}
                      </div>
                      {proj.description && (
                        <p className="font-body text-xs text-section-secondary mb-2">
                          {proj.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}