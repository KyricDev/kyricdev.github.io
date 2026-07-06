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
  hero: {
    label: "back to top",
    href: "#hero",
  },
};

export type NavLinkProps = {
  isVisible: boolean;
  label: string;
  href: string;
  className?: string;
};

export const Links = {
  github: "https://github.com/KyricDev",
  resume: "/cv/Resume-Madrid.pdf",
  linkedIn: "https://www.linkedin.com/in/ricky-dave-madrid-aa4ba6149/",
};
