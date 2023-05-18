import React from 'react';
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%" }}>Login</h2>
    </>
  )
}

export default Login
