import * as React from "react";
import { FrontasticComponent } from "./component";
import { Cell, Tastic, FrontasticRoute, ComponentRegistry } from "./types";

function CellComponent({
  size,
  children
}: {
  size: number;
  children: React.ReactNode;
}) {
  return <div className={`col-span-${size}`}>{children}</div>;
}

export function FrontasticRenderer({
  data,
  components = {}
}: {
  data: FrontasticRoute;
  components: ComponentRegistry;
}) {
  const { head, main, footer } = data.page.regions;
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {head.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map(t => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {main.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {footer.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
    </div>
  );
}