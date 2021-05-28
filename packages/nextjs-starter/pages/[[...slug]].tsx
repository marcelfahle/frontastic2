import type { FrontasticRoute, Cell, Tastic } from "@frontastic/frontastic-js";
import {
  createClient,
  // FrontasticComponent,
  FrontasticRenderer,
} from "@frontastic/frontastic-js";
import { components } from "../frontastic/components";
import { GetStaticProps } from "next";

// function CellComponent({ size, children }) {
//   return <div className={`col-span-${size}`}>{children}</div>;
// }

// function FrontasticRenderer({ data, components = {} }) {
//   const { head, main, footer } = data.page.regions;
//   return (
//     <div>
//       <div className="grid grid-cols-12 gap-4">
//         {head.elements.map((cell: Cell) => (
//           <CellComponent size={cell.configuration.size} key={cell.cellId}>
//             {cell.tastics.map((t: Tastic) => (
//               <FrontasticComponent
//                 components={components}
//                 key={t.tasticId}
//                 block={t}
//                 streams={data.data.stream}
//               />
//             ))}
//           </CellComponent>
//         ))}
//       </div>
//       <div className="grid grid-cols-12 gap-4">
//         {main.elements.map((cell: Cell) => (
//           <CellComponent size={cell.configuration.size} key={cell.cellId}>
//             {cell.tastics.map((t: Tastic) => (
//               <FrontasticComponent
//                 components={components}
//                 key={t.tasticId}
//                 block={t}
//                 streams={data.data.stream}
//               />
//             ))}
//           </CellComponent>
//         ))}
//       </div>
//       <div className="grid grid-cols-12 gap-4">
//         {footer.elements.map((cell: Cell) => (
//           <CellComponent size={cell.configuration.size} key={cell.cellId}>
//             {cell.tastics.map((t: Tastic) => (
//               <FrontasticComponent
//                 components={components}
//                 key={t.tasticId}
//                 block={t}
//                 streams={data.data.stream}
//               />
//             ))}
//           </CellComponent>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Slug({ data }) {
  if (!data) {
    return null;
  }

  return <FrontasticRenderer data={data} components={components} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // instantiate the client
  // get data for the current route
  const frontastic = createClient(
    "https://demo-show.frontastic.io",
    "API_KEY_GOES_HERE",
  );
  const { data } = await frontastic.getRouteData(params);

  return {
    props: { data },
    revalidate: 600,
  };
};

export async function getStaticPaths() {
  const paths = [];

  return { paths, fallback: true };
}
