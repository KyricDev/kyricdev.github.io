import { useElementObserver } from "@/v2/hooks/useElementObserver";
import { cn } from "@/v2/lib/utils";

export function Sidebar() {
  const { isVisible: isHeroVisible } = useElementObserver({
    id: "hero",
    threshold: 0,
  });
  const { isVisible: isProjectsVisible } = useElementObserver({
    id: "projects",
    threshold: 0,
  });

  return (
    <div
      className={cn(
        "fixed top-0 flex flex-col gap-10 z-10 text-white text-left",
        "transition-all duration-200",
        "backdrop-blur-sm",
        "text-3xl",
        "pt-10 pl-20 pr-5",
        "h-screen",
        {
          "opacity-100": !isHeroVisible,
          "opacity-0 pointer-events-none": isHeroVisible,
        },
      )}
    >
      <a href="#projects">
        <div
          className={cn("w-52 overflow-hidden", {
            "text-primary": isProjectsVisible,
          })}
        >
          <div
            className={cn(
              "flex gap-2 items-center",
              {
                "translate-0": isProjectsVisible,
                "-translate-x-12": !isProjectsVisible,
              },
              "transition-all duration-200",
            )}
          >
            <div>
              <div className="w-10 h-px bg-primary" />
            </div>
            <div>PROJECTS</div>
          </div>
        </div>
      </a>
      <a href="#techstack">TECHSTACK</a>
      <a href="#about">ABOUT ME</a>
      <a href="#socials">SOCIALS</a>
    </div>
  );
}
