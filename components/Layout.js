import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

import { useContext } from "react";
import { AppContext } from "./Context";
import DynamicModal from "./DynamicModal";

const Layout = ({ children }) => {
  const { isVisible } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Ten Flags Theme Park</title>
        <meta
          name="description"
          content="Welcome to the Ten Flags Theme Park website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header /> 
        <DynamicModal />
      <div
        style={{
          transition: isVisible ? "all 1.5s ease-out" : "all 0.2s",
          width: "100%",
          background: "black",
          background: "rgba(0, 0, 0, 0)",
          filter: isVisible ? "blur(6px)" : "blur(0px)",
          opacity: isVisible ? "0.4" : "1",
          pointerEvents: !isVisible ? "auto" : "none",
        }}
      >
        {children}
        <Footer />
      </div>
      </main>
    </div>
  );
};

export default Layout;
