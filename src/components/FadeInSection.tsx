import { useRef, useEffect, useState } from "react";

export function FadeInSection({
  children,
  forceVisible = false,
}: {
  children: React.ReactNode;
  forceVisible?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [forceVisible]);

  return (
    <div
      ref={ref}
      className={`fade-in-section${visible ? " visible" : ""}`}
    >
      {children}
    </div>
  );
}