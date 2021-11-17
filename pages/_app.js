import { createContext, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppContext, ContextWrapper } from "../components/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
