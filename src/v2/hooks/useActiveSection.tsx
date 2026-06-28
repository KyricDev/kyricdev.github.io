import { NavList } from "@/v2/constants/navigation";
import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSectionId, setActiveSectionId] = useState<string>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    Object.keys(NavList).forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSectionId };
}
