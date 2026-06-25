import { Hero } from "@/v2/components/sections/Hero";
import { Projects } from "@/v2/components/sections/Projects";
import "@/v2/styles/tailwind.css";

function V2Main() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Hero />
      <Projects />
    </div>
  );
}

export { V2Main };
