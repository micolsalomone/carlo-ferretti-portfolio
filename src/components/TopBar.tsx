import { useState, useEffect } from "react";

export function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full bg-white z-40 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
      data-name="Heading 1"
    >
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center w-full">
        <div className="box-border content-stretch flex items-center justify-between px-6 lg:px-[168px] relative w-full pl-14 lg:pl-16">
          <p
            className={`font-title text-foreground font-medium leading-[26px] relative shrink-0 text-nowrap tracking-[-0.4px] whitespace-pre transition-all duration-300 ${
              isScrolled ? "text-[18px]" : "text-[22px]"
            }`}
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Carlo Ferretti
          </p>
          <div
            className={`relative shrink-0 transition-all duration-300 ${
              isScrolled ? "h-[36px] w-[50px]" : "h-[45px] w-[63px]"
            }`}
            data-name="sticker 1"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                alt=""
                src="/sticker.png"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </div>
          </div>
          <p
            className={`font-body font-normal leading-[18px] relative shrink-0 text-foreground text-nowrap tracking-[-0.4px] whitespace-pre transition-all duration-300 ${
              isScrolled ? "text-[14px]" : "text-[16px]"
            }`}
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Public Value Designer
          </p>
        </div>
      </div>
    </div>
  );
}