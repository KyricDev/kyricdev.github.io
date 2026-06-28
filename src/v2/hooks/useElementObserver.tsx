import { useEffect, useState } from "react";

type UseElementObserverProps = {
  id: string;
  threshold?: number;
};

export function useElementObserver({ id, threshold }: UseElementObserverProps) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    const observer = new IntersectionObserver(
      ([element]) => {
        setVisible(!!element?.isIntersecting);
      },
      { threshold: threshold ?? 1 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id, threshold]);

  return { isVisible };
}
