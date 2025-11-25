export function CollaborazioniSection() {
  const collaborazioni = [
    {
      categoria: "Università e Ricerca",
      enti: [
        "Università di Bologna",
        "Politecnico di Milano",
        "Fondazione Feltrinelli",
        "AICCON",
      ],
    },
    {
      categoria: "Terzo Settore",
      enti: [
        "Forum Terzo Settore",
        "Legacoop",
        "Confcooperative",
        "CSVnet",
      ],
    },
    {
      categoria: "Cultura e Innovazione",
      enti: [
        "Che Fare",
        "Doppiozero",
        "Labsus",
        "Impact Hub",
      ],
    },
    {
      categoria: "Fondazioni",
      enti: [
        "Fondazione Cariplo",
        "Fondazione Compagnia di San Paolo",
        "Fondazione CON IL SUD",
        "European Cultural Foundation",
      ],
    },
    {
      categoria: "Formazione",
      enti: ["IED", "Scuola Politica", "ISNET", "Avanzi"],
    },
  ];

  return (
    <section id="collaborazioni" className="py-32 section-back">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className=" font-title  text-section text-3xl lg:text-5xl tracking-tight mb-8">
            Collaborazioni
          </h2>
          <p className="font-body  text-lg text-section-secondary max-w-2xl leading-relaxed">
            Nel corso degli anni ho collaborato con diverse organizzazioni,
            istituzioni e reti, costruendo relazioni basate su fiducia e
            reciprocità.
          </p>
        </div>

        <div className="space-y-16">
          {collaborazioni.map((gruppo, index) => (
            <div key={index}>
              <h3 className=" font-title text-sm uppercase tracking-wider mb-6 text-section-secondary">
                {gruppo.categoria}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gruppo.enti.map((ente, i) => (
                  <div
                    key={i}
                    className="border border-black/10 p-6 hover:border-black/30 transition-colors cursor-pointer"
                  >
                    <p className=" font-body text-section text-sm">
                      {ente}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-24 border-t border-black/10 pt-16">
          <p className=" font-body text-lg text-section-secondary max-w-2xl leading-relaxed italic">
            "Credo nel valore delle reti, nella forza delle relazioni di lungo
            periodo e nella capacità delle organizzazioni di imparare insieme.
            Ogni collaborazione è un'occasione di crescita condivisa."
          </p>
        </div>
      </div>
    </section>
  );
}