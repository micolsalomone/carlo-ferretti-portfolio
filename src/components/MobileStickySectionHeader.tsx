import { useEffect, useMemo, useState } from "react";
import { navItems as defaultNavItems } from "./navItems";

interface MobileStickySectionHeaderProps {
  title: string;
  topClassName?: string; 
  onNavigate?: (id: string) => void;
  navItems?: { id: string; label: string }[];
  showOnScrollOnly?: boolean;
}

export function MobileStickySectionHeader({
  title,
  topClassName = "top-[58px]",
  onNavigate,
  navItems = defaultNavItems,
  showOnScrollOnly = false,
}: MobileStickySectionHeaderProps) {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bgColor, setBgColor] = useState<string | undefined>(undefined);
  const [textClass, setTextClass] = useState<string>("text-foreground");

  const sectionIds = useMemo(() => navItems.map((n) => n.id), [navItems]);

  useEffect(() => {
    if (!showOnScrollOnly) return;
    const onScroll = () => setHasScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showOnScrollOnly]);

  // Aggiorna colore della barra in base alla sezione visibile
  useEffect(() => {
    const updateBarColors = () => {
      // posizione di riferimento: top della viewport sotto la topbar
      const stickyOffsetPx = 54; // deve rispecchiare topClassName
      const refY = stickyOffsetPx + 1;
      let currentSection: HTMLElement | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= refY && rect.bottom > refY) {
          currentSection = el;
          break;
        }
      }
      if (currentSection) {
        const computed = getComputedStyle(currentSection);
        const bg = computed.backgroundColor;
        setBgColor(bg);
        // se la sezione ha classe 'section-back', usa testo primario di sezione, altrimenti foreground
        if (currentSection.classList.contains("section-back")) {
          setTextClass("text-section");
        } else {
          setTextClass("text-foreground");
        }
      } else {
        setBgColor(undefined);
        setTextClass("text-foreground");
      }
    };
    updateBarColors();
    window.addEventListener("scroll", updateBarColors, { passive: true });
    window.addEventListener("resize", updateBarColors);
    return () => {
      window.removeEventListener("scroll", updateBarColors as any);
      window.removeEventListener("resize", updateBarColors);
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  if (showOnScrollOnly && !hasScrolled) {
    return null;
  }

  return (
    <div className={`lg:hidden sticky ${topClassName} z-30 border-b border-black/10`} style={{ backgroundColor: bgColor }}> 
      <div className="max-w-5xl lg:max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        <h2 className={`font-title text-3xl ${textClass} tracking-tight`}>{title}</h2>
        <div className="relative">
          <button
            aria-haspopup="true"
            aria-expanded={open}
            aria-label="Apri indice sezioni"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-black/10 rounded-md bg-white text-black shadow"
            onClick={() => setOpen((v) => !v)}
          >
            Indice
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {open && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-full mt-2 z-20 w-56 rounded-md border border-black/10 bg-white text-black shadow-lg">
                <ul className="py-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-black/5"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
