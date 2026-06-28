export const NavList: Record<string, Omit<NavLinkProps, "isVisible">> = {
  projects: {
    label: "projects",
    href: "#projects",
  },
  techstack: {
    label: "techstack",
    href: "#techstack",
  },
  aboutme: {
    label: "about me",
    href: "#aboutme",
  },
  socials: {
    label: "socials",
    href: "#socials",
  },
};

export type NavLinkProps = {
  isVisible: boolean;
  label: string;
  href: string;
};
