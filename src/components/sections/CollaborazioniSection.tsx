export function CollaborazioniSection() {
  const collaborazioni = [
    {
      categoria: "Organizzazioni con cui ho collaborato",
      enti: [
        { label: "Allegro Moderato Cooperativa Sociale Onlus", url: "https://allegromoderato.it" },
        { label: "Apical", url: "https://apical.org" },
        { label: "Artribune", url: "https://www.artribune.com" },
        { label: "Associazione Culturale L’Albero", url: "https://www.lalbero.org/" },
        { label: "Associazione TouPlay ETS", url: "https://touplay.it" },
        { label: "Be Part", url: "https://bepart.net/" },
        { label: "Cariplo Factory", url: "https://cariplofactory.it/" },
        { label: "Che Fare", url: "https://che-fare.com" },
        { label: "Civicwise", url: "https://civicwise.org" },
        { label: "Colligo Festival", url: "https://colligofest.com/" },
        { label: "Cooperativa LAMA Impresa Sociale", url: "https://agenzialama.eu/" },
        { label: "Comune di Bari", url: "https://www.comune.bari.it" },
        { label: "Comune di Cinisello Balsamo", url: "https://comune.cinisello-balsamo.mi.it" },
        { label: "Comune di Cisternino", url: "https://comune.cisternino.br.it" },
        { label: "Comune di Conversano", url: "https://www.comune.conversano.ba.it" },
        { label: "Fondazione Compagnia di San Paolo", url: "https://www.compagniadisanpaolo.it" },
        { label: "Fondazione Cariplo", url: "https://www.fondazionecariplo.it/it/index.html" },
        { label: "Conexiones Improbables", url: "https://conexionesimprobables.es" },
        { label: "Cultit srl", url: "https://cultit.it" },
        { label: "Destination Makers", url: "https://destination-makers.com/" },
        { label: "Distretto Produttivo Puglia Creativa", url: "https://www.pugliacreativa.it/" },
        { label: "Domus", url: "https://www.domusweb.it" },
        { label: "EIT Culture & Creativity", url: "https://eit-culture-creativity.eu" },
        { label: "Federculture", url: "https://www.federculture.it" },
        { label: "Feltrinelli Education", url: "https://www.feltrinellieducation.it" },
        { label: "Fondazione Brodolini", url: "https://www.fondazionebrodolini.it" },
        { label: "Fondazione Changes", url: "https://fondazionechanges.org" },
        { label: "Fondazione GianfrancoDioguardi", url: "http://www.fondazionedioguardi.it/" },
        { label: "Fondazione Nuto Revelli", url: "https://nutorevelli.org/" },
        { label: "Fondazione Treccani Cultura", url: "https://www.treccani.it/fondazione" },
        { label: "Generalitat de Catalunya", url: "https://web.gencat.cat" },
        { label: "Greenpeace Italia", url: "https://www.greenpeace.org/italy" },
        { label: "Hospitalet de Llobregat Municipality", url: "https://www.l-h.cat" },
        { label: "Hibridalab", url: "https://www.hibridalab.eus/" },
        { label: "Indire", url: "https://www.indire.it" },
        { label: "Indisciplinarte", url: "https://www.indisciplinarte.it" },
        { label: "Intesa Sanpaolo", url: "https://group.intesasanpaolo.com" },
        { label: "Itinerari Paralleli", url: "https://www.itinerariparalleli.it" },
        { label: "Labsus", url: "https://www.labsus.org" },
        { label: "LAN Architetture", url: "https://www.lan-architetture.org/" },
        { label: "Milano Mediterranea", url: "https://milanomediterranea.org" },
        { label: "Music Innovation Hub", url: "https://musicinnovationhub.org" },
        { label: "Officine Culturali", url: "https://www.facebook.com/mondobeatfest" },
        { label: "PazLab", url: "https://www.pazlab.com/" },
        { label: "Regione Friuli Venezia Giulia", url: "https://www.regione.fvg.it" },
        { label: "Scuola Open Source", url: "https://scuolaopensource.xyz" },
        { label: "Seoski kulturni centar Markovac", url: "https://skcmarkovac.rs/" },
        { label: "Sineglossa", url: "https://sineglossa.it" },
        { label: "Società Cooperativa Mutamenti", url: "https://teatrocivico14.org/" },
        { label: "Squareworld", url: "https://www.squareworld.studio/en/home/" },
        { label: "The App Association", url: "https://actonline.org" },
        { label: "Toscana Promozione Turistica", url: "https://www.toscanapromozione.it" },
        { label: "Università di Parma", url: "https://www.unipr.it" },
        { label: "Università di Salerno", url: "https://www.unisa.it" },
        { label: "Università Bocconi", url: "https://www.unibocconi.it" },
        { label: "Università di Timișoara", url: "https://www.uvt.ro" },
        { label: "Valid Foto BCN", url: "https://validfoto.com" },
        { label: "Vita Lenta", url: "https://www.instagram.com/vita________lenta/?hl=en" },
        { label: "Vitoria Municipality", url: "https://www.vitoria-gasteiz.org" },
      ],
    },
    {
      categoria: "Reti di cui faccio parte",
      enti: [
        { label: "Social Value International", url: "https://www.socialvalueint.org/" },
        { label: "Metalab Harvard", url: "https://mlml.io/" },
        { label: "Lo Stato dei Luoghi", url: "https://www.lostatodeiluoghi.com/" },
        { label: "URBACT", url: "https://urbact.eu/" },
        { label: "B.Creative", url: "https://bcreativetracks.com/membership/" },
        { label: "ACEI", url: "https://culturaleconomics.org/my-account/my-profile/" },
        { label: "EIT Culture and Creativity", url: "https://eit-culture-creativity.eu/" },
      ],
    },
  ];

  return (
    <section id="collaborazioni" className="py-32 section-back">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="font-title text-section text-3xl lg:text-5xl tracking-tight mb-8">
            Collaborazioni
          </h2>
          <p className="font-body text-lg text-section-secondary max-w-2xl leading-relaxed">
            Nel corso degli anni ho collaborato con diverse organizzazioni,
            istituzioni e reti, costruendo relazioni basate su fiducia e
            reciprocità.
          </p>
        </div>

        <div className="space-y-16">
          {collaborazioni.map((gruppo, index) => (
            <div key={index}>
              <h3 className="font-title text-sm uppercase tracking-wider mb-6 text-section-secondary">
                {gruppo.categoria}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gruppo.enti.map((ente, i) => (
                  <div
                    key={i}
                    className="border border-black/10 p-6 hover:border-black/30 transition-colors"
                  >
                    <p className="font-body text-section text-sm break-words">
                      {ente.url ? (
                        <a
                          href={ente.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent underline transition-colors"
                        >
                          {ente.label}
                        </a>
                      ) : (
                        ente.label
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-24 border-t border-black/10 pt-16">
          <p className="font-body text-lg text-section-secondary max-w-2xl leading-relaxed italic">
            "Credo nel valore delle reti, nella forza delle relazioni di lungo
            periodo e nella capacità delle organizzazioni di imparare insieme.
            Ogni collaborazione è un'occasione di crescita condivisa."
          </p>
        </div>
      </div>
    </section>
  );
}