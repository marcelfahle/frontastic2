type ViewData = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\ViewData";
  stream: Streams | null;
};
export type Streams = {
  [key: string]: object;
};
type Node = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Node";
  nodeId: string;
};
type Page = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Page";
  pageId: string;
  regions: Regions;
};
type Regions = {
  footer: Footer;
  main: Main;
  head: Head;
};
type Footer = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
  elements: Cell[];
};
type Head = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
  elements: Cell[];
};
type Main = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
  elements: Cell[];
};
export type Cell = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Cell";
  cellId: string;
  configuration: CellConfiguration;
  tastics: Tastic[];
};
type CellConfiguration = {
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Cell\\Configuration";
  size: number;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
};
export type Tastic = {
  tasticId: string;
  tasticType: string;
  configuration: TasticConfiguration;
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Tastic";
};

type TasticConfiguration = {
  desktop: boolean;
  mobile: true;
  stream?: string;
  tablet: boolean;
  _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Tastic\\Configuration";
  [key: string]: any;
};

export type FrontasticRoute = {
  data: ViewData;
  node: Node;
  page: Page;
};
export type ComponentRegistry = {
  [key: string]: React.ElementType;
};
export type Component = {
  components: ComponentRegistry;
  block: Tastic;
  streams: Streams | null;
  highlight?: boolean;
};
