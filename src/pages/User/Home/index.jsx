import React from 'react';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <h2 style={{ color: "hotpink", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%" }}>Home</h2>
    </>
  )
}

export default Home
