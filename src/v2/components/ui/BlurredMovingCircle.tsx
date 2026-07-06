import { useRandomPosition } from "@/v2/hooks/useRandomPosition";
import { useEffect, useRef, useState } from "react";

type BlurredMovingCircleProps = {
  size?: number;
};

export function BlurredMovingCircle({
  size: initialSize,
}: BlurredMovingCircleProps) {
  const { pos1, pos2 } = useRandomPosition({
    interval: 5000,
    usePercentage: false,
  });
  const [parentHeight, setParentHeight] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [size, setSize] = useState(initialSize ?? 600);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = element.current?.parentElement;
    if (parent) {
      const { clientHeight, clientWidth } = parent;
      setParentHeight(clientHeight);
      setParentWidth(clientWidth);
      setSize(Math.min(clientHeight, clientWidth) / 2);
    }
  }, [element]);

  return (
    <div
      ref={element}
      className="
          absolute
          rounded-full
          bg-primary
          -z-10
          top-0
          left-0
          transition-transform duration-5000
        "
      style={{
        height: size ?? 600,
        width: size ?? 600,
        transform: `translate(${pos2 * parentWidth}px, ${pos1 * parentHeight}px)`,
        filter: `blur(${size}px)`,
      }}
    />
  );
}
