import type { IconType } from "react-icons";
import { BsJavascript } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  SiBetterauth,
  SiCss,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRemix,
  SiSentry,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const FrontendIconMap: Record<string, { icon: IconType; label: string }> = {
  js: {
    icon: BsJavascript,
    label: "Javascript",
  },
  flutter: {
    icon: SiFlutter,
    label: "Flutter",
  },
  html: {
    icon: SiHtml5,
    label: "HTML",
  },
  css: {
    icon: SiCss,
    label: "CSS",
  },
  tailwind: {
    icon: SiTailwindcss,
    label: "Tailwind",
  },
  react: {
    icon: SiReact,
    label: "ReactJS",
  },
};

const BackendIconMap: Record<string, { icon: IconType; label: string }> = {
  node: {
    icon: FaNodeJs,
    label: "NodeJS",
  },
  betterAuth: {
    icon: SiBetterauth,
    label: "BetterAuth",
  },
  remix: {
    icon: SiRemix,
    label: "Remix",
  },
  postgresql: {
    icon: SiPostgresql,
    label: "PostgreSQL",
  },
  docker: {
    icon: SiDocker,
    label: "Docker",
  },
  kubernetes: {
    icon: SiKubernetes,
    label: "Kubernetes",
  },
  prisma: {
    icon: SiPrisma,
    label: "Prisma",
  },
  next: {
    icon: SiNextdotjs,
    label: "NextJS",
  },
  sentry: {
    icon: SiSentry,
    label: "Sentry",
  },
  mongodb: {
    icon: SiMongodb,
    label: "MongoDB",
  },
  typescript: {
    icon: SiTypescript,
    label: "Typescript",
  },
};

const IconMap: Record<string, { icon: IconType; label: string }> = {
  ...FrontendIconMap,
  ...BackendIconMap,
};

type IconMapKey = keyof typeof IconMap;

export function getIcon(key: IconMapKey) {
  return IconMap[key]?.icon;
}

export function getLabel(key: IconMapKey) {
  return IconMap[key]?.label;
}

export function getFrontendIconMap() {
  return FrontendIconMap;
}

export function getBackendIconMap() {
  return BackendIconMap;
}

export { IconMap, type IconMapKey };
