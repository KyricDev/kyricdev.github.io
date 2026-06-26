import { BsJavascript } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  SiBetterauth,
  SiCss,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiKubernetes,
  SiPostgresql,
  SiPrisma,
  SiRemix,
  SiTailwindcss,
} from "react-icons/si";

const IconMap = {
  js: BsJavascript,
  node: FaNodeJs,
  betterAuth: SiBetterauth,
  remix: SiRemix,
  postgresql: SiPostgresql,
  flutter: SiFlutter,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  prisma: SiPrisma,
};

type IconMapKey = keyof typeof IconMap;

export function getIcon(key: IconMapKey) {
  return IconMap[key];
}

export { IconMap, type IconMapKey };
