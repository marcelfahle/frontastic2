"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontasticRenderer = void 0;
const React = require("react");
const component_1 = require("./component");
function CellComponent({ size, children }) {
    return React.createElement("div", { className: `col-span-${size}` }, children);
}
function FrontasticRenderer({ data, components = {} }) {
    const { head, main, footer } = data.page.regions;
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid grid-cols-12 gap-4" }, head.elements.map((cell) => (React.createElement(CellComponent, { size: cell.configuration.size, key: cell.cellId }, cell.tastics.map(t => (React.createElement(component_1.FrontasticComponent, { components: components, key: t.tasticId, block: t, streams: data.data.stream }))))))),
        React.createElement("div", { className: "grid grid-cols-12 gap-4" }, main.elements.map((cell) => (React.createElement(CellComponent, { size: cell.configuration.size, key: cell.cellId }, cell.tastics.map((t) => (React.createElement(component_1.FrontasticComponent, { components: components, key: t.tasticId, block: t, streams: data.data.stream }))))))),
        React.createElement("div", { className: "grid grid-cols-12 gap-4" }, footer.elements.map((cell) => (React.createElement(CellComponent, { size: cell.configuration.size, key: cell.cellId }, cell.tastics.map((t) => (React.createElement(component_1.FrontasticComponent, { components: components, key: t.tasticId, block: t, streams: data.data.stream })))))))));
}
exports.FrontasticRenderer = FrontasticRenderer;
//# sourceMappingURL=renderer.js.map