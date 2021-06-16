import {
    // FrontasticRoute,
    // Cell,
    // Tastic,
    createClient,
    // FrontasticComponent,
    FrontasticRenderer,
} from "@frontastic/frontastic-js"

import { components } from "../frontastic/components"
import { GetStaticProps } from "next"

export default function Slug({ data }) {
    if (!data) {
        return null
    }

    return <FrontasticRenderer data={data} components={components} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // instantiate the client
    // get data for the current route
    const frontastic = createClient(
        "https://demo-show.frontastic.io",
        "API_KEY_GOES_HERE"
    )
    const { data } = await frontastic.getRouteData(params)

    return {
        props: { data },
        revalidate: 600,
    }
}

export async function getStaticPaths() {
    const paths = []

    return { paths, fallback: true }
}
