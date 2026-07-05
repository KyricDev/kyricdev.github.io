import { ProjectCard } from "@/v2/components/ui/ProjectCard";
import { PROJECTS } from "@/v2/constants/projects";

export function Projects() {
  return (
    <div
      id="projects"
      className="w-full text-white font-thin flex flex-col gap-10 pl-80"
    >
      <div className="flex flex-col px-50">
        {PROJECTS.map(
          (
            { description, imgSrc, techstack, title, url, contributions },
            index,
          ) => (
            <ProjectCard
              key={index}
              index={index}
              description={description}
              icons={techstack}
              img={imgSrc}
              title={title}
              url={url}
              contributions={contributions}
            />
          ),
        )}
      </div>
    </div>
  );
}
