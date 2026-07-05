import { BsJavascript } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  SiBetterauth,
  SiCss,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiResend,
  SiSentry,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const FrontendIconMap = {
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
  js: {
    icon: BsJavascript,
    label: "Javascript",
  },
  typescript: {
    icon: SiTypescript,
    label: "Typescript",
  },
  react: {
    icon: SiReact,
    label: "ReactJS",
  },
  next: {
    icon: SiNextdotjs,
    label: "NextJS",
  },
  remix: {
    icon: SiRemix,
    label: "Remix",
  },
  flutter: {
    icon: SiFlutter,
    label: "Flutter",
  },
};

const BackendIconMap = {
  node: {
    icon: FaNodeJs,
    label: "NodeJS",
  },
  typescript: {
    icon: SiTypescript,
    label: "Typescript",
  },
  next: {
    icon: SiNextdotjs,
    label: "NextJS",
  },
  remix: {
    icon: SiRemix,
    label: "Remix",
  },
  betterAuth: {
    icon: SiBetterauth,
    label: "BetterAuth",
  },
  postgresql: {
    icon: SiPostgresql,
    label: "PostgreSQL",
  },
  mongodb: {
    icon: SiMongodb,
    label: "MongoDB",
  },
  docker: {
    icon: SiDocker,
    label: "Docker",
  },
  sentry: {
    icon: SiSentry,
    label: "Sentry",
  },
  stripe: {
    icon: SiStripe,
    label: "Stripe",
  },
  resend: {
    icon: SiResend,
    label: "Resend",
  },
  php: {
    icon: SiPhp,
    label: "PhP",
  },
};

const IconMap = {
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
