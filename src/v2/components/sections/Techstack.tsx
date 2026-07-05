import { Divider } from "@/v2/components/ui/Divider";
import { getBackendIconMap, getFrontendIconMap } from "@/v2/lib/iconHelpers";
import type { IconType } from "react-icons";

export function Techstack() {
  const frontendIcons = getFrontendIconMap();
  const backendIcons = getBackendIconMap();

  return (
    <div
      id="techstack"
      className="flex font-thin text-white pl-80 py-25 gap-20 h-screen justify-center"
    >
      <div className="flex flex-col text-right gap-10">
        <div className="text-6xl">Frontend</div>
        <div className="gap-5 flex flex-col items-end">
          {Object.values(frontendIcons).map(({ icon: Icon, label }, index) => {
            return (
              <TechComponent Icon={Icon} label={label} reverse key={index} />
            );
          })}
        </div>
      </div>
      <Divider orientation="vertical" />
      <div className="flex gap-10 flex-col">
        <div className="text-6xl">Backend</div>
        <div className="gap-5 flex flex-col">
          {Object.values(backendIcons).map(({ icon: Icon, label }, index) => {
            return <TechComponent Icon={Icon} label={label} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

type TechComponentProps = {
  reverse?: boolean;
  label: string;
  Icon: IconType;
};

function TechComponent({ Icon, label, reverse }: TechComponentProps) {
  if (reverse) {
    return (
      <div className="flex items-center gap-5">
        <div className="text-3xl">{label}</div>
        <Icon className="text-2xl" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-5">
      <Icon className="text-3xl" />
      <div className="text-2xl">{label}</div>
    </div>
  );
}
