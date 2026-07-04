type DividerProps = {
  orientation: "horizontal" | "vertical";
};

export function Divider(props: DividerProps) {
  const { orientation } = props;

  if (orientation === "vertical") {
    return <div className="bg-primary items-stretch w-px h-full" />;
  }

  return <div className="bg-primary justify-stretch h-px w-full" />;
}
