const SIZE_MAP = {
  xxs: "4",
  xs: "8",
  sm: "12",
  md: "16",
  lg: "20",
  xl: "24"
};

export default function HorizontalSpacerTastic({ data }) {
  const size = data.size || "xl";
  const spaceInPx = data.spaceInPx || SIZE_MAP[size];

  return (
    <div
      className="w-full"
      style={{
        height: `${spaceInPx}px`
      }}
    />
  );
}
