import React from 'react';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About page</title>
      </Helmet>
      <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%" }}> About</h2>

    </>
  )
}

export default About

