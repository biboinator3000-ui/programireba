import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + window.innerHeight >= documentHeight - 4) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
