import React from "react";
import Head from "next/head";
import PropTypes from 'prop-types';
import "./common.css";

function App({Component, pageProps}) {
  return(
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NWAI-UI</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

App.propTypes = {
  Component : PropTypes.elementType.isRequired,
}

export default App;