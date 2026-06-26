import { ProjectCard } from "@/v2/components/ui/ProjectCard";

export function Projects() {
  return (
    <div
      id="projects"
      className="w-full text-white font-thin flex flex-col gap-10 px-100 py-25"
    >
      <div className="flex flex-col gap-28">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
