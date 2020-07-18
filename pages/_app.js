import React from 'react';
import { css, Global } from '@emotion/core';
import Head from 'next/head';

import Header from 'components/Header';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global
        styles={css`
          @import url('http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: 'Open Sans';
            background-color: #f6f4fd;
          }
        `}
      ></Global>
      <div className="container">
        <Head>
          <title>Sirius Future</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
