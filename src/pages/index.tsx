import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tailwind CSS + Next.js with TypeScript</title>
        <meta
          name="description"
          content="This is template for Tailwind CSS + Next.js + TypeScript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-4 justify-center items-center h-screen">
        <p className="text-center text-7xl">
          Using Tailwind CSS + Next.js + TypeScript Like a Pro
        </p>
        <p className="sass">Yes!</p>
      </div>
    </div>
  );
};

export default Home;
