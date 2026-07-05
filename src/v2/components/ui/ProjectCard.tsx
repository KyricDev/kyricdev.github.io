import { Button } from "@/v2/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/v2/components/ui/tooltip";
import { getIcon, getLabel, type IconMapKey } from "@/v2/lib/iconHelpers";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCardProps = {
  description?: string;
  title?: string;
  icons?: IconMapKey[];
  url?: string;
  img?: string;
  index?: number;
  contributions?: string[];
};

export function ProjectCard(props: ProjectCardProps) {
  const { description, icons, title, img, index, url, contributions } = props;

  if (index !== undefined && index % 2 === 0) {
    return (
      <div className="flex gap-10 h-screen items-center">
        <div className="flex flex-col gap-10 flex-4 items-end">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-light text-right">
              {title ?? "Sample Title"}
            </div>
            <div className="flex gap-2 text-3xl">
              {icons?.map((icon) => {
                const Icon = getIcon(icon);
                const label = getLabel(icon);
                return (
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon />
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-white">
                      {label}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex-1">
              {img ? (
                <img src={img} className="w-full rounded-4xl" />
              ) : (
                <div className="flex-1 bg-primary h-56 rounded-4xl" />
              )}
            </div>
            <div className="space-y-5 flex-1 text-lg text-right">
              <div>{description}</div>
              <ul className="space-y-1">
                {contributions?.map((contribution) => (
                  <li className="flex justify-end">
                    <div>{contribution}</div>
                    <ChevronLeft />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <a href={url} target="_blank">
              <Button className="px-15 py-7">Site</Button>
            </a>
          </div>
        </div>
        {/* <div className="flex-1" /> */}
      </div>
    );
  }

  return (
    <div className="flex gap-10 h-screen items-center">
      {/* <div className="flex-1" /> */}
      <div className="flex flex-col gap-10 flex-4">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-light">{title ?? "Sample Title"}</div>
          <div className="flex gap-2 text-3xl">
            {icons?.map((icon) => {
              const Icon = getIcon(icon);
              const label = getLabel(icon);
              return (
                <Tooltip>
                  <TooltipTrigger>
                    <Icon />
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-white">
                    {label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="space-y-5 flex-1 text-lg">
            <div>{description}</div>
            <ul className="space-y-1">
              {contributions?.map((contribution) => (
                <li className="flex">
                  <ChevronRight />
                  <div> {contribution}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            {img ? (
              <img src={img} className="w-full rounded-4xl" />
            ) : (
              <div className="flex-1 bg-primary h-56 rounded-4xl" />
            )}
          </div>
        </div>
        <div>
          <a href={url} target="_blank">
            <Button className="px-15 py-7">Site</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
