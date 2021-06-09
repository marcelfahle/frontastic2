"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontasticComponent = void 0;
const React = require("react");
function FrontasticComponent(props) {
    const { components, block, streams, highlight = false } = props;
    const ComponentToRender = components[block.tasticType] || components["default"];
    return (React.createElement("div", { className: `w-full ${highlight && "ring-8 ring-pink-500"} ` },
        React.createElement(ComponentToRender, { type: block === null || block === void 0 ? void 0 : block.tasticType, id: block === null || block === void 0 ? void 0 : block.tasticId, data: block === null || block === void 0 ? void 0 : block.configuration, stream: (block === null || block === void 0 ? void 0 : block.configuration.stream) && streams
                ? streams[block.configuration.stream]
                : null })));
}
exports.FrontasticComponent = FrontasticComponent;
//# sourceMappingURL=component.js.map