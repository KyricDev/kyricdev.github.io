import { BlurredMovingCircle } from "@/v2/components/ui/BlurredMovingCircle";
import { Button } from "@/v2/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/v2/components/ui/tooltip";
import { Links } from "@/v2/constants/navigation";
import { useEmailClick } from "@/v2/hooks/useEmailClick";
import { cn } from "@/v2/lib/utils";
import { DownloadIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

export function Hero() {
  const { handleEmailClick } = useEmailClick();

  return (
    <div
      id="hero"
      className={cn(
        "relative",
        "w-full h-screen flex flex-col justify-center",
        "md:pl-20 pb-20 px-10",
        "overflow-x-clip",
      )}
    >
      <BlurredMovingCircle />
      <div className="flex flex-col gap-2 md:gap-5 py-5 md:py-20 text-left">
        <div className="flex text-white gap-1 md:gap-5 items-center">
          <a href={Links.github} target="_blank">
            <SiGithub className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125 md:text-4xl" />
          </a>
          <a href={Links.linkedIn} target="_blank">
            <FaLinkedin className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125 md:text-4xl" />
          </a>
          <Tooltip>
            <TooltipTrigger>
              <LuMail
                className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125 md:text-4xl"
                onClick={handleEmailClick}
              />
            </TooltipTrigger>
            <TooltipContent className="text-white text-md" side="right">
              <p>Copy Email</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <div className="text-white font-thin text-xs md:text-3xl">
            HI, I'M RICKY
          </div>
          <div className="text-primary text-xl md:text-7xl font-extralight -mt-2">
            SOFTWARE DEVELOPER
          </div>
        </div>
        <div className="text-white font-thin text-xs md:text-2xl max-w-3xs md:max-w-5xl">
          I’m a full stack developer with over 3 years of development experience
          in web, mobile, and AI platforms, software, and solutions.
        </div>
      </div>

      <div className="flex gap-3">
        <a href="/cv/Madrid-Resume.pdf" target="_blank">
          <Button className="text-xs md:text-md p-3 md:p-6">
            <div>Download CV</div>
            <DownloadIcon />
          </Button>
        </a>
        <a href="#projects">
          <Button className="text-xs md:text-md p-3 md:p-6" variant={"outline"}>
            <div>Projects</div>
          </Button>
        </a>
      </div>
    </div>
  );
}
