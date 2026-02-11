// components/MetaHead/MetaHead.js

import Head from "next/head";

export default function MetaHead({
  title = "Art Gallery",
  description = "Browse artworks, save favorites, and leave comments.",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
