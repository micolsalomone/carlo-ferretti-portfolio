import { useState } from "react";

interface SidebarNavProps {
  activeSection: string;
}

export function SidebarNav({ activeSection }: SidebarNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Chi sono" },
    { id: "approccio", label: "Approccio" },
    { id: "aree", label: "Aree di lavoro" },
    { id: "risorse", label: "Risorse" },
    { id: "collaborazioni", label: "Collaborazioni" },
    { id: "contatto", label: "Contattami" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMobileOpen(false); // chiudi menu dopo click
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block fixed left-0 top-0 h-screen w-64 border-r border-black/10 sidebar">
        <div className="flex flex-col h-full p-12">
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative font-body text-sm
                      transition-colors duration-200 text-left w-full
                      ${
                        activeSection === item.id
                          ? "text-accent"
                          : "text-secondary hover:text-accent"
                      }
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`
                          w-1 h-1 rounded-full bg-accent transition-opacity duration-200
                          ${activeSection === item.id ? "opacity-100" : "opacity-0"}
                        `}
                      />
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </nav>

      {/* Mobile Burger Menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Burger menu a sinistra */}
        <button
          aria-label="Apri menu"
          className="absolute left-4 top-4 p-2 bg-white rounded-md border border-black/10"
          onClick={() => setMobileOpen(true)}
        >
          {/* Hamburger icon */}
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        {/* Menu mobile */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex">
            <nav className="bg-white w-64 h-full p-8 shadow-lg">
              <button
                aria-label="Chiudi menu"
                className="mb-8 text-black"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        font-body text-lg w-full text-left
                        ${
                          activeSection === item.id
                            ? "text-black"
                            : "text-black/40 hover:text-black/70"
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Click outside to close */}
            <div
              className="flex-1"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </>
  );
}