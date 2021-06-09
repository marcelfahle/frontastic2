import * as React from 'react'
import {Component} from './types'


export function FrontasticComponent(props: Component) {
  const {components, block, streams, highlight = false} = props;
  const ComponentToRender:React.ElementType = components[block.tasticType] || components["default"];

  return (
    <div className={`w-full ${highlight && "ring-8 ring-pink-500"} `}>
      <ComponentToRender
        type={block?.tasticType}
        id={block?.tasticId}
        data={block?.configuration}
        stream={block?.configuration.stream && streams
          ? streams[block.configuration.stream]
          : null}
      />
    </div>
  );
}
