import * as React from "react";
import * as CSS from "csstype";

export function Cell({
  size,
  children
}: {
  size: number;
  children: React.ReactNode;
}) {
  const styles: CSS.Properties = {
    gridColumn: `span ${size} / span ${size}`,
    overflow: "hidden"
  };
  return <div style={styles}>{children}</div>;
}
