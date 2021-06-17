import * as React from "react";
import * as CSS from "csstype";

function isNumber(value: string | number): boolean {
  return value != null && value !== "" && !isNaN(Number(value.toString()));
}

export function Grid({
  maxWidth = "980px",
  spacing = "1rem",
  className = "",
  children
}: {
  maxWidth?: string | number;
  spacing?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const wrapperStyles: CSS.Properties = {
    maxWidth: isNumber(maxWidth) ? `${maxWidth}px` : (maxWidth as string),
    margin: "0 auto"
  };
  const gridStyles: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    gridGap: spacing
  };
  return (
    <div style={wrapperStyles}>
      <div style={gridStyles} className={className}>
        {children}
      </div>
    </div>
  );
}
