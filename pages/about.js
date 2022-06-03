import Head from "next/head";
import React from "react";
import { AboutLayout } from "../src/container/About";

const About = () => {
  return (
    <div>
      <Head>
        <title>GryCare - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutLayout />
    </div>
  );
};

export default About;