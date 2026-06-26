import { Button } from "@/v2/components/ui/button";
import { useRandomPosition } from "@/v2/hooks/useRandomPosition";
import { cn } from "@/v2/lib/utils";
import { DownloadIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

export function Hero() {
  const { pos1, pos2 } = useRandomPosition(5000);

  return (
    <div
      id="hero"
      className={cn(
        "relative",
        "w-full h-screen flex flex-col justify-center",
        "pl-20",
      )}
    >
      <div
        className="
          absolute
          size-[600px]
          rounded-full
          bg-primary
          -z-10
          top-0
          left-0
          blur-[600px]
          transition-all duration-5000
        "
        style={{
          transform: `translate(${pos1 * 2}%, ${pos2}%)`,
        }}
      />

      <div
        className="flex flex-col gap-5 
        py-20 text-left"
      >
        <div className="flex text-white gap-5 items-center">
          <SiGithub className="text-4xl" />
          <FaLinkedin className="text-4xl" />
          <LuMail className="text-4xl" />
        </div>
        <div>
          <div className="text-white font-thin text-3xl">HI, I'M RICKY</div>
          <div className="text-primary text-7xl font-extralight -mt-2">
            SOFTWARE DEVELOPER
          </div>
        </div>
        <div className="text-white font-thin text-2xl max-w-5xl">
          I’m a full stack developer with over 3 years of development experience
          in web, mobile, and AI platforms, software, and solutions.
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="p-6">
          <div>Download CV</div>
          <DownloadIcon />
        </Button>
      </div>
    </div>
  );
}
