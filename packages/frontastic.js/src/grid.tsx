import * as React from "react";
import * as CSS from "csstype";

// function isNumber(value: string | number): boolean {
//   return value != null && value !== "" && !isNaN(Number(value.toString()));
// }

export function Grid({
  children,
  wrapperClassName,
  gridClassName
}: {
  children: React.ReactNode;
  gridClassName?: string;
  wrapperClassName?: string;
}) {
  const wrapperCss: CSS.Properties = {};
  const gridCss: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))"
  };
  return (
    <div className={wrapperClassName} style={wrapperCss}>
      <div className={gridClassName} style={gridCss}>
        {children}
      </div>
    </div>
  );
}
