// Rimuovi questa riga:
// import { ExternalLink } from "lucide-react";

// Ordine delle categorie come in ProgettiSection
const aree = [
	{
		id: "area-management",
		title: "Management economia sociale",
		icon: "management.png",
		intro:
			"Consulenza strategica e organizzativa per cooperative, imprese sociali, fondazioni.",
		progetti: [
			{
				title: "Cantieri Spaziali",
				description:
					"Curatela dell’offerta didattica e Coordinamento del Programma Formativo dell’area Cultura.",
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
				description:
					"Coordinamento e Valutazione d’impatto del progetto Community Opera.",
				url: "https://www.communityopera.it/",
				year: "2023-2024",
			},
			{
				title: "Comm.Unity.Lab (URBACT)",
				description:
					"Coordinamento del progetto URBACT Comm.Unity.Lab per il comune di Bari.",
				url: "https://urbact.eu/networks/comunitylab",
				year: "2022-2023",
			},
			{
				title: "Restory",
				description:
					"Coordinamento del WP5 del progetto di ricerca Restory, Horizon Europe.",
				url: "https://restory-heritage.eu/",
				year: "2023-2024",
			},
			{
				title: "Genera Festival",
				description:
					"Coordinamento del Genera Festival 2020, festival di musica e arte visiva, a Cisternino.",
				url: "https://www.instagram.com/generafestival/",
				year: "2020",
			},
			{
				title: "Spazio13",
				description:
					"Coordinamento del Consiglio Direttivo dell’ETS Spazio 13.",
				year: "2018-2024",
			},
		],
	},
	{
		id: "area-progettazione",
		title: "Progettazione europea",
		icon: "progettaz-europea.png",
		intro:
			"Supporto alla progettazione, scrittura e gestione di progetti finanziati da programmi europei.",
		progetti: [
			{
				title: "Fondazione Changes",
				description:
					"Progettazione su Horizon Europe, digitalizzazione del patrimonio.",
				url: "https://research-and-innovation.ec.europa.eu/research-area/social-sciences-and-humanities/cultural-heritage-and-cultural-and-creative-industries-ccis/cultural-heritage-cloud_en",
				year: "2023-2024",
			},
			{
				title: "BASE Milano",
				description:
					"Progettazione su Erasmus+ e Creative Europe, impatto internazionale.",
				year: "2022-2024",
			},
			{
				title: "LAMA Impresa Sociale",
				description:
					"Progettazione su Creative Europe, spazi verdi urbani come area di produzione culturale.",
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
		id: "area-ricerca",
		title: "Ricerca",
		icon: "ricerca.png",
		intro:
			"Ricerca qualitativa e quantitativa su economia sociale, innovazione culturale, pratiche collaborative.",
		progetti: [
			{ title: "Atlante ICC", description: "" },
			{ title: "Federculture Giochi Storici", description: "" },
			{ title: "EIT", description: "" },
			{ title: "Cipro", description: "" },
			{ title: "BIS Bari", description: "" },
			{ title: "DROP", description: "" },
			{ title: "IMPACTOUR", description: "" },
			{ title: "GreenCCIrcle", description: "" },
			{ title: "Learning Trajectories", description: "" },
			{ title: "Social Value of Community Opera", description: "" },
			{ title: "Generative AI Academy", description: "" },
			{
				title: "Multidimensional Approach to Socio-cultural evaluation",
				description: "",
			},
			{ title: "Toscana Promozione", description: "" },
			{ title: "Just Fashion", description: "" },
		],
	},
	{
		id: "area-valutazione",
		title: "VIS (Valutazione d’impatto)",
		icon: "impatto-sociale.png",
		intro:
			"Progettazione e implementazione di sistemi di misurazione dell'impatto per organizzazioni del terzo settore.",
		progetti: [
			{ title: "Lo Stabile", description: "" },
			{ title: "Nuto Revelli", description: "" },
			{ title: "Coltuour Data", description: "" },
			{ title: "Silent City", description: "" },
			{ title: "BIS Bari", description: "" },
			{ title: "Value Based Approach", description: "" },
			{ title: "Just Fashion", description: "" },
		],
	},
	{
		id: "area-formazione",
		title: "Didattica",
		icon: "formazione.png",
		intro:
			"Percorsi formativi su design thinking, valutazione, progettazione partecipata.",
		progetti: [
			{ title: "Feltrinelli Education", description: "" },
			{ title: "XYZ", description: "" },
			{ title: "School of Sustainability", description: "" },
			{ title: "Kroton", description: "" },
			{ title: "ISP", description: "" },
			{ title: "Bocconi", description: "" },
			{ title: "Festival Portogallo", description: "" },
			{ title: "Formazione BASE Milano VIS", description: "" },
			{ title: "Formazione Albero VIS", description: "" },
			{ title: "Tutorship Collab", description: "" },
			{ title: "Tutorship Piemonte Movie", description: "" },
			{ title: "BE PART", description: "" },
			{ title: "Indire", description: "" },
			{ title: "Workshop Vitalenta", description: "" },
			{ title: "Workshop Apical", description: "" },
			{ title: "Università di Parma", description: "" },
			{ title: "Workshop Futuri Emergenti", description: "" },
			{ title: "Conversazioni sulla Co-creazione", description: "" },
			{ title: "Galattica Gravina", description: "" },
			{ title: "Liceo Milani", description: "" },
			{ title: "Distretto Puglia Creativa", description: "" },
			{ title: "Podcasting School", description: "" },
		],
	},
	{
		id: "area-media",
		title: "Talking",
		icon: "media.png",
		intro:
			"Podcast, articoli, talk pubblici su temi di innovazione sociale e cultura.",
		progetti: [
			{ title: "Regione Friuli Venezia Giulia", description: "" },
			{ title: "UFM", description: "" },
			{ title: "Distretto Puglia Creativa", description: "" },
			{ title: "Festival Social Housing", description: "" },
			{ title: "Arte e Scienza per MTHUB", description: "" },
			{ title: "Future4cities", description: "" },
			{ title: "TED x Barletta", description: "" },
			{ title: "LAB Ravenna", description: "" },
			{ title: "Università Romania", description: "" },
			{ title: "NEB Conexiones Improbables", description: "" },
			{ title: "METALAB", description: "" },
			{ title: "R2B NEB", description: "" },
			{ title: "R2B Zenit", description: "" },
			{ title: "EIT & Competenze Bologna", description: "" },
			{ title: "Malmo", description: "" },
			{ title: "ACT Bari", description: "" },
			{ title: "ACT Amsterdam", description: "" },
		],
	},
	{
		id: "area-3dxr",
		title: "3DXR",
		icon: "3dxr.png",
		intro: "Progetti di innovazione digitale e realtà aumentata.",
		progetti: [
			{ title: "Caserta", description: "" },
			{ title: "Raqama", description: "" },
		],
	},
];

export function AreeLavoroSection() {
	return (
		<section id="aree" className="py-32 bg-background">
			<div className="max-w-5xl mx-auto px-6 lg:px-12">
				<div className="mb-24">
                    <h2 className="font-title text-section text-3xl lg:text-5xl tracking-tight mb-8">
                        Aree di lavoro
                    </h2>
                </div>

				<div className="space-y-32">
					{aree.map((area, index) => (
						<div
							key={index}
							id={area.id}
							className="pb-16 border-b border-black/10 last:border-0"
						>
							<div className="flex flex-col items-start gap-2 mb-6 lg:flex-row lg:items-center lg:gap-4">
								<div className="w-[122px] h-[72px] opacity-40 relative flex-shrink-0 overflow-hidden mb-2 lg:mb-0">
									<img
										src={`${import.meta.env.BASE_URL}${area.icon}`}
										alt=""
										className="absolute inset-0 size-full max-w-none pointer-events-none"
										style={{
											objectFit: "contain",
											width: "100%",
											height: "100%",
										}}
									/>
								</div>
								<h3 className="font-title text-section text-3xl">
									{area.title}
								</h3>
							</div>
							<p className="font-body text-secondary mb-12 leading-relaxed max-w-2xl">
								{area.intro}
							</p>

							{/* Card layout per progetti */}
							<div>
								<h4 className="font-title text-secondary text-sm uppercase tracking-wider mb-4">
									Progetti
								</h4>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									{area.progetti.map((proj, i) => (
										<div
											key={i}
											className="border border-black/10 rounded-lg p-5 flex flex-col justify-between hover:border-black/30 transition-colors"
										>
											<div>
												<div className="flex items-center justify-between mb-2">
													<h4 className="font-title text-section text-base font-semibold">
														{"url" in proj && proj.url ? (
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
													{"year" in proj && proj.year && (
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}