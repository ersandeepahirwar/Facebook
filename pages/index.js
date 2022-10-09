import Head from "next/head";

import { getSession } from "next-auth/client";

import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta
          name="description"
          content="Facebook 2.0 built with Next.js by Codey Sandeep"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
