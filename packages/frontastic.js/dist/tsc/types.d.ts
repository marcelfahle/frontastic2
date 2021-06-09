declare type ViewData = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\ViewData";
    stream: Streams | null;
};
export declare type Streams = {
    [key: string]: object;
};
declare type Node = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Node";
    nodeId: string;
};
declare type Page = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Page";
    pageId: string;
    regions: Regions;
};
declare type Regions = {
    footer: Footer;
    main: Main;
    head: Head;
};
declare type Footer = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
    elements: Cell[];
};
declare type Head = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
    elements: Cell[];
};
declare type Main = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Region";
    elements: Cell[];
};
export declare type Cell = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Cell";
    cellId: string;
    configuration: CellConfiguration;
    tastics: Tastic[];
};
declare type CellConfiguration = {
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Cell\\Configuration";
    size: number;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
};
export declare type Tastic = {
    tasticId: string;
    tasticType: string;
    configuration: TasticConfiguration;
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Tastic";
};
declare type TasticConfiguration = {
    desktop: boolean;
    mobile: true;
    stream?: string;
    tablet: boolean;
    _type: "Frontastic\\Catwalk\\FrontendBundle\\Domain\\Tastic\\Configuration";
    [key: string]: any;
};
export declare type FrontasticRoute = {
    data: ViewData;
    node: Node;
    page: Page;
};
export declare type ComponentRegistry = {
    [key: string]: React.ElementType;
};
export declare type Component = {
    components: ComponentRegistry;
    block: Tastic;
    streams: Streams | null;
    highlight?: boolean;
};
export {};
