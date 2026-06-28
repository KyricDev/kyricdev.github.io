import { NavList, type NavLinkProps } from "@/v2/constants/navigation";
import { useActiveSection } from "@/v2/hooks/useActiveSection";
import { useElementObserver } from "@/v2/hooks/useElementObserver";
import { cn } from "@/v2/lib/utils";

export function Sidebar() {
  const { isVisible: isHeroVisible } = useElementObserver({
    id: "hero",
    threshold: 0,
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

  useActiveSection();

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
      {NavLinkProps.map((navLinkProp, index) => (
        <NavLink key={index} {...navLinkProp} />
      ))}
    </div>
  );
}

function NavLink(props: NavLinkProps) {
  const { href, isVisible, label } = props;

  return (
    <a href={`${href}`}>
      <div
        className={cn("w-52 overflow-hidden", {
          "text-primary": isVisible,
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
