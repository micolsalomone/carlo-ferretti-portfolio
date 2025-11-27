 

interface SidebarNavProps {
  activeSection: string;
  onScrollToSection: (id: string) => void;
}

export function SidebarNav({ activeSection, onScrollToSection }: SidebarNavProps) {
  

  const navItems = [
    { id: "home", label: "Chi sono" },
    { id: "approccio", label: "Approccio" },
    { id: "aree", label: "Aree di lavoro" },
    { id: "media", label: "Media" },
    { id: "collaborazioni", label: "Collaborazioni" },
    { id: "contatto", label: "Contattami" },
  ];

  const scrollToSection = (id: string) => {
    if (onScrollToSection) {
      onScrollToSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      // chiudi menu dopo click (non più necessario su mobile)
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
    </>
  );
}