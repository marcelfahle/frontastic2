import { createClient, FrontasticRenderer } from "@frontastic/frontastic-js";
import { GetStaticProps } from "next";

import { components } from "../frontastic/components";
import styles from "./slug.module.css";

export default function Slug({ data }) {
  if (!data) {
    return null;
  }

  return (
    <FrontasticRenderer
      data={data}
      components={components}
      wrapperClassName={styles.gridWrapper}
    />
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const frontastic = createClient(
    "https://demo-show.frontastic.io",
    "API_KEY_GOES_HERE"
  );
  const { data } = await frontastic.getRouteData(params);

  return {
    props: { data }
    // revalidate: 600
  };
};

// export async function getStaticPaths() {
//   const paths = [];

//   return { paths, fallback: true };
// }
