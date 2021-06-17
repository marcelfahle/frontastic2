import * as React from "react";
import { FrontasticComponent } from "./component";
import { Grid } from "./grid";
import { Cell } from "./cell";
import {
  Cell as CellType,
  Tastic,
  FrontasticRoute,
  ComponentRegistry
} from "./types";

export function FrontasticRenderer({
  data,
  components = {},
  maxWidth,
  spacing
}: {
  data: FrontasticRoute;
  components: ComponentRegistry;
  maxWidth: string;
  spacing: string;
}) {
  const { head, main, footer } = data.page.regions;
  return (
    <div>
      <Grid maxWidth={maxWidth} spacing={spacing}>
        {head.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map(t => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
      <Grid maxWidth={maxWidth} spacing={spacing}>
        {main.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
      <Grid maxWidth={maxWidth} spacing={spacing}>
        {footer.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
    </div>
  );
}
