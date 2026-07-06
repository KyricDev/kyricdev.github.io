import { BlurredMovingCircle } from "@/v2/components/ui/BlurredMovingCircle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/v2/components/ui/tooltip";
import { IMAGES } from "@/v2/constants/images";
import { Links } from "@/v2/constants/navigation";
import { useEmailClick } from "@/v2/hooks/useEmailClick";
import { FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

export function AboutMe() {
  const { handleEmailClick } = useEmailClick();

  return (
    <div id="aboutme" className="relative overflow-x-clip">
      <BlurredMovingCircle />
      <div className="px-10 gap-8 md:gap-20 md:ml-80 h-screen flex flex-col items-center justify-center md:px-50">
        <img
          className="size-28 md:size-64 rounded-full border-primary border-2"
          src={IMAGES["personal-sm"]}
        />
        <p className="text-white text-xs md:text-xl text-justify">
          Electrical engineer turned developer, I found my love for programming
          and development after a chance encounter working on an in-house IoT
          project during my engineering days.
          <br />
          <br />
          After building the whole thing from scratch using minimal programming
          knowledge, learning everything on my own, and hardware know-how, I
          decided that development is the career that I wanted to pursue and I
          never looked back.
          <br />
          <br />I have more than 3 years of software development experience from
          mobile, web, full stack development, AI-powered solutions, and IoT. If
          it's even remotely about writing, thinking, and optimizing in code,
          I'm on board.
        </p>
        <div className="flex text-white gap-5 items-center text-3xl md:text-5xl">
          <a href={Links.github} target="_blank">
            <SiGithub className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125" />
          </a>
          <a href={Links.linkedIn} target="_blank">
            <FaLinkedin className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125" />
          </a>
          <Tooltip>
            <TooltipTrigger>
              <LuMail
                className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-125"
                onClick={handleEmailClick}
              />
            </TooltipTrigger>
            <TooltipContent className="text-white text-md" side="right">
              <p>Copy Email</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
