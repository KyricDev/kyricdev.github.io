import { Hero } from "@/v2/components/sections/Hero";
import { Projects } from "@/v2/components/sections/Projects";
import { Techstack } from "@/v2/components/sections/Techstack";
import { Sidebar } from "@/v2/components/ui/Sidebar";
import "@/v2/styles/tailwind.css";

function V2Main() {
  return (
    <div className="flex flex-col gap-10 pl-20 relative">
      <Sidebar />
      <Hero />
      <Projects />
      <Techstack />
    </div>
  );
}

export { V2Main };
