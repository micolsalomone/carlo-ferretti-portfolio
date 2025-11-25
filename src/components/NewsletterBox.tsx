import { ArrowRight } from "lucide-react";

export function NewsletterBox() {
  return (
    <div className="border border-black/10 p-8 lg:p-12">
      <h3 className=" font-title text-2xl mb-4">
        Newsletter
      </h3>
      <p className=" font-body text-black/60 mb-8 max-w-xl">
        Ricevi aggiornamenti su progetti, pubblicazioni e opportunità di
        collaborazione.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="La tua email"
          className="flex-1 px-4 py-3 border border-black/10   text-sm focus:outline-none focus:border-black/30 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white font-body  text-sm hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
        >
          Iscriviti
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
