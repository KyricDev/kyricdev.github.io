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
        "fixed top-0 z-10 flex flex-col justify-between text-white text-left",
        "transition-all duration-200",
        "backdrop-blur-sm",
        "text-3xl",
        "py-10 pl-20 pr-5",
        "h-screen",
        {
          "opacity-100": !isHeroVisible,
          "opacity-0 pointer-events-none": isHeroVisible,
        },
      )}
    >
      <div className="flex flex-col gap-10">
        {NavLinkProps.map((navLinkProp, index) => (
          <NavLink key={index} {...navLinkProp} />
        ))}
      </div>
      <NavLink
        href="#hero"
        isVisible={activeSectionId === "hero"}
        label="Back to Top"
        className="text-xl"
      />
    </div>
  );
}

function NavLink(props: NavLinkProps) {
  const { href, isVisible, label, className } = props;

  return (
    <a href={`${href}`} className={className}>
      <div
        className={cn("w-52 overflow-hidden", {
          "text-primary": isVisible,
          "hover:text-primary/80": !isVisible,
        })}
      >
        <div
          className={cn(
            "flex gap-2 items-center",
            {
              "translate-0": isVisible,
              "-translate-x-12": !isVisible,
            },
            "transition-all duration-200",
          )}
        >
          <div>
            <div className="w-10 h-px bg-primary" />
          </div>
          <div className="capitalize">{label}</div>
        </div>
      </div>
    </a>
  );
}
