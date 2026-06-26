import { Button } from "@/v2/components/ui/button";
import type { IconMapKey } from "@/v2/lib/iconHelpers";
import { BsJavascript } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiBetterauth, SiPostgresql, SiRemix, SiSentry } from "react-icons/si";

type ProjectCardProps = {
  description?: string;
  title?: string;
  icons?: IconMapKey[];
  url?: string;
  img?: string;
};

export function ProjectCard(props: ProjectCardProps) {
  const { description, icons, title, url, img } = props;

  return (
    <div className="flex flex-col gap-10 max-w-6xl">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-light">{title ?? "Sample Title"}</div>
        <div className="flex gap-2 text-3xl">
          <BsJavascript />
          <FaNodeJs />
          <SiRemix />
          <SiPostgresql />
          <SiSentry />
          <SiBetterauth />
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <div className="flex-1 text-xl">
          {description ??
            `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation` +
              `ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.
            `}
        </div>
        {img ? (
          <img src={img} />
        ) : (
          <div className="flex-1 bg-primary h-64 rounded-4xl" />
        )}
      </div>

      <div>
        <Button className="px-15 py-7">Site</Button>
      </div>
    </div>
  );
}
