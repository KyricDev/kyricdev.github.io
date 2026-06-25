import { useState, useEffect } from "react";

export function useRandomPosition(interval?: number) {
  const [pos1, setPos1] = useState(5);
  const [pos2, setPos2] = useState(78);

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      setPos1(Math.floor(Math.random() * 100));
      setPos2(Math.floor(Math.random() * 100));
    }, interval ?? 1000);

    return () => {
      clearInterval(intervalFunction);
    };
  }, []);

  return { pos1, pos2 };
}
