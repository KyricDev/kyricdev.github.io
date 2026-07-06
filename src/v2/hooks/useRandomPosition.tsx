import { useState, useEffect } from "react";

type UseRandomPositionProps = {
  usePercentage?: boolean;
  interval?: number;
};

export function useRandomPosition({
  interval,
  usePercentage,
}: UseRandomPositionProps) {
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      setPos1(!usePercentage ? Math.random() : Math.floor(Math.random() * 100));
      setPos2(!usePercentage ? Math.random() : Math.floor(Math.random() * 100));
    }, interval ?? 1000);

    return () => {
      clearInterval(intervalFunction);
    };
  }, [interval, usePercentage]);

  return { pos1, pos2 };
}
