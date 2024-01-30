import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="h-[80vh] w-[100%] bg-green-300">Home</div>
    </>
  );
}
