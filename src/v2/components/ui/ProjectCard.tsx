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
  index?: number;
};

export function ProjectCard(props: ProjectCardProps) {
  const { description, icons, title, url, img, index } = props;

  if (index !== undefined && index % 2 === 0) {
    return (
      <div className="flex gap-10 h-screen items-center">
        <div className="flex flex-col gap-10 flex-1 items-end">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-light text-right">
              {title ?? "Sample Title"}
            </div>
            <div className="flex gap-2 text-3xl">
              <BsJavascript />
              <FaNodeJs />
              <SiRemix />
              <SiPostgresql />
              <SiSentry />
              <SiBetterauth />
            </div>
          </div>
          <div className="flex gap-10">
            {img ? (
              <img src={img} />
            ) : (
              <div className="flex-1 bg-primary h-56 rounded-4xl" />
            )}
            <div className="flex-1 text-xl text-right">
              {description ??
                `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation`}
            </div>
          </div>
          <div>
            <Button className="px-15 py-7">Site</Button>
          </div>
        </div>
        <div className="flex-1" />
      </div>
    );
  }

  return (
    <div className="flex gap-10 h-screen items-center">
      <div className="flex-1" />
      <div className="flex flex-col gap-10 flex-1">
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
        <div className="flex gap-10">
          <div className="flex-1 text-xl text-left">
            {description ??
              `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation`}
          </div>
          {img ? (
            <img src={img} />
          ) : (
            <div className="flex-1 bg-primary h-56 rounded-4xl" />
          )}
        </div>
        <div>
          <Button className="px-15 py-7">Site</Button>
        </div>
      </div>
    </div>
  );
}
