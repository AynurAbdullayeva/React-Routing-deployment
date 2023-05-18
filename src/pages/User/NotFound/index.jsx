import React from 'react';
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> 404 | Not Found</title>
      </Helmet>
      <h1 style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%" }}>This page could not be found | <b>404</b> </h1>
    </>
  )
}

export default NotFound
