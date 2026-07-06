import { useRandomPosition } from "@/v2/hooks/useRandomPosition";
import { cn } from "@/v2/lib/utils";

export function GradientBackground() {
  const { pos1, pos2 } = useRandomPosition({ interval: 5000 });

  return (
    <div
      className={cn(
        "w-full h-full bg-radial-[at_50%_50%] from-primary-dark via-background to-background absolute -z-10",
        "transition-all duration-5000",
        "bg-size-[200%_200%]",
      )}
      style={{
        backgroundPosition: `${pos1}% ${pos2}%`,
      }}
    />
  );
}
