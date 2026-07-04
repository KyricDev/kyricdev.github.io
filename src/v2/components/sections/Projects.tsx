import { ProjectCard } from "@/v2/components/ui/ProjectCard";

export function Projects() {
  const projects = Array.from({ length: 5 });

  return (
    <div
      id="projects"
      className="w-full text-white font-thin flex flex-col gap-10 pl-80"
    >
      <div className="flex flex-col px-10">
        {projects.map((_, index) => (
          <ProjectCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
