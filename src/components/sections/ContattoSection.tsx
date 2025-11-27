import { Mail, Linkedin } from "lucide-react";
import { MobileStickySectionHeader } from "../MobileStickySectionHeader";
import { NewsletterBox } from "../NewsletterBox";

export function ContattoSection() {
  return (
    <section id="contatto" className="py-32 section-back">
      <MobileStickySectionHeader title="Contattami" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="hidden lg:block font-title text-section text-3xl lg:text-5xl tracking-tight mb-8">
            Contattami
          </h2>

          <p className=" font-body text-lg text-section-secondary mb-12 leading-relaxed max-w-2xl">
            Se sei interessato a una consulenza, una collaborazione o vorresti
            invitarmi come docente o speaker, scrivimi. Rispondo sempre.
          </p>

          {/* CTA Boxes in Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 text-section">
            <div className="border border-black/10 p-8 bg-background rounded-lg">
              <h3 className=" font-title text-xl mb-3">
                Consulenze
              </h3>
              <p className=" font-body text-sm text-section-secondary">
                Supporto strategico per organizzazioni del terzo settore,
                fondazioni, cooperative e imprese sociali.
              </p>
            </div>

            <div className="border border-black/10 p-8 bg-background rounded-lg">
              <h3 className=" font-title text-xl mb-3">
                Collaborazioni
              </h3>
              <p className=" font-body text-sm text-section-secondary">
                Ricerche partecipate, progettazione europea, valutazione
                d'impatto, design di servizi.
              </p>
            </div>

            <div className="border border-black/10 p-8 bg-background rounded-lg">
              <h3 className=" font-title text-xl mb-3">
                Docenze e Talk
              </h3>
              <p className=" font-body text-sm text-section-secondary">
                Workshop, corsi universitari, talk pubblici su design sociale,
                innovazione, valutazione.
              </p>
            </div>
          </div>

          {/* Contatti diretti */}
          <div className="space-y-4">
            <a
              href="mailto:carlo.ferretti@3dxr.it"
              className="flex items-center gap-3 text-section hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className=" ">
                carlo.ferretti@3dxr.it
              </span>
            </a>
            <a
              href="https://linkedin.com/in/carloferretti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-section hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-body ">
                linkedin.com/in/carloferretti
              </span>
            </a>
          </div>
                {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-0 lg:px-0 pt-24">
        <NewsletterBox />
      </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-16 border-t border-black/10">
          <p className=" font-body text-sm text-section-secondary">
            Carlo Ferretti - Public Value Designer
          </p>
        </div>
      </div>
    </section>
  );
}