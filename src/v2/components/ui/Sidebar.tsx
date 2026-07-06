import { NavList, type NavLinkProps } from "@/v2/constants/navigation";
import { useActiveSection } from "@/v2/hooks/useActiveSection";
import { useElementObserver } from "@/v2/hooks/useElementObserver";
import { cn } from "@/v2/lib/utils";

export function Sidebar() {
  const { isVisible: isHeroVisible } = useElementObserver({
    id: "hero",
    threshold: 0,
    initialState: true,
  });
  const { activeSectionId } = useActiveSection();

  const NavLinkProps: NavLinkProps[] = Object.entries(NavList).map(
    ([key, value]) => {
      const { isVisible } = useElementObserver({
        id: key,
        threshold: 0,
      });

      return {
        ...value,
        isVisible: key === activeSectionId && isVisible,
      };
    },
  );

  return (
    <div
      className={cn(
        "fixed bottom-0 md:top-0 z-10 flex md:flex-col md:justify-between text-white text-left",
        "transition-all duration-200",
        "backdrop-blur-sm",
        "text-xs md:text-3xl",
        "py-3 md:py-10 md:pl-20 md:pr-5",
        "md:h-screen",
        "w-full md:w-auto",
        {
          "opacity-100": !isHeroVisible,
          "opacity-0 pointer-events-none": isHeroVisible,
        },
        "gap-10 md:gap-0",
      )}
    >
      <div className="flex md:flex-col md:gap-10 h-full justify-around w-full">
        {NavLinkProps.map((navLinkProp, index) => {
          if (index === NavLinkProps.length - 1) {
            return (
              <NavLink
                key={index}
                {...navLinkProp}
                className="text-xs md:text-xl md:mt-auto"
              />
            );
          }

          return <NavLink key={index} {...navLinkProp} />;
        })}
      </div>
    </div>
  );
}

function NavLink(props: NavLinkProps) {
  const { href, isVisible, label, className } = props;

  return (
    <a href={`${href}`} className={className}>
      <div
        className={cn("md:w-52 overflow-hidden", {
          "text-primary": isVisible,
          "hover:text-primary/80": !isVisible,
        })}
      >
        <div
          className={cn(
            "flex gap-2 items-center",
            {
              "translate-0": isVisible,
              "md:-translate-x-12": !isVisible,
            },
            "transition-all duration-200",
          )}
        >
          <div className="hidden md:inline ">
            <div className="w-10 h-px bg-primary" />
          </div>
          <div className="capitalize">{label}</div>
        </div>
      </div>
    </a>
  );
}
