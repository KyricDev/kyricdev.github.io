import { getBackendIconMap, getFrontendIconMap } from "@/v2/lib/iconHelpers";

export function Techstack() {
  const frontendIcons = getFrontendIconMap();
  const backendIcons = getBackendIconMap();

  return (
    <div
      id="techstack"
      className="flex font-thin text-white pl-100 py-25 gap-20 h-screen justify-center"
    >
      <div className="flex flex-col text-right gap-10">
        <div className="text-7xl">Frontend</div>
        <div className="gap-5 flex flex-col items-end">
          {Object.values(frontendIcons).map(({ icon: Icon, label }, index) => {
            return (
              <div className="flex items-center gap-5" key={index}>
                <div className="text-5xl">{label}</div>
                <Icon className="text-6xl" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-primary items-stretch w-px" />
      <div className="flex gap-10 flex-col">
        <div className="text-7xl">Backend</div>
        <div className="gap-5 flex flex-col">
          {Object.values(backendIcons).map(({ icon: Icon, label }, index) => {
            return (
              <div className="flex items-center gap-5" key={index}>
                <Icon className="text-6xl" />
                <div className="text-5xl">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
