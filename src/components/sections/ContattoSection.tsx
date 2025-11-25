import { Mail, Linkedin } from "lucide-react";

export function ContattoSection() {
  return (
    <section id="contatto" className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className=" font-title text-3xl lg:text-5xl tracking-tight mb-8">
            Contatto
          </h2>

          <p className=" font-body text-lg text-black/60 mb-12 leading-relaxed max-w-2xl">
            Se sei interessato a una consulenza, una collaborazione o vorresti
            invitarmi come docente o speaker, scrivimi. Rispondo sempre.
          </p>

          {/* CTA Boxes in Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="border border-black/10 p-8">
              <h3 className=" font-title text-xl mb-3">
                Consulenze
              </h3>
              <p className=" font-body text-sm text-black/60">
                Supporto strategico per organizzazioni del terzo settore,
                fondazioni, cooperative e imprese sociali.
              </p>
            </div>

            <div className="border border-black/10 p-8">
              <h3 className=" font-title text-xl mb-3">
                Collaborazioni
              </h3>
              <p className=" font-body text-sm text-black/60">
                Ricerche partecipate, progettazione europea, valutazione
                d'impatto, design di servizi.
              </p>
            </div>

            <div className="border border-black/10 p-8">
              <h3 className=" font-title text-xl mb-3">
                Docenze e Talk
              </h3>
              <p className=" font-body text-sm text-black/60">
                Workshop, corsi universitari, talk pubblici su design sociale,
                innovazione, valutazione.
              </p>
            </div>
          </div>

          {/* Contatti diretti */}
          <div className="space-y-4">
            <a
              href="mailto:carlo.ferretti@example.com"
              className="flex items-center gap-3 text-black/60 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className=" ">
                carlo.ferretti@example.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/carloferretti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black/60 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-body ">
                linkedin.com/in/carloferretti
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-16 border-t border-black/10">
          <p className=" font-body text-sm text-black/40">
            Carlo Ferretti - Public Value Designer
          </p>
        </div>
      </div>
    </section>
  );
}