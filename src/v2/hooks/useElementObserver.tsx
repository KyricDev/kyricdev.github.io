import { useEffect, useState } from "react";

type UseElementObserverProps = {
  id: string;
  threshold?: number;
  initialState?: boolean;
};

export function useElementObserver({
  id,
  threshold,
  initialState,
}: UseElementObserverProps) {
  const [isVisible, setVisible] = useState(initialState ?? false);

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
