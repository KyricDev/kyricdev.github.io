import { useRandomPosition } from "@/v2/hooks/useRandomPosition";

type BlurredMovingCircleProps = {
  size?: number;
};

export function BlurredMovingCircle({ size }: BlurredMovingCircleProps) {
  const { pos1, pos2 } = useRandomPosition(5000);

  return (
    <div
      className="
          absolute
          rounded-full
          bg-primary
          -z-10
          top-0
          left-0
          blur-[600px]
          transition-all duration-5000
        "
      style={{
        transform: `translate(${pos1 * 2}%, ${pos2}%)`,
        height: size ?? 600,
        width: size ?? 600,
      }}
    />
  );
}
