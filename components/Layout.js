import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'

const Layout = ( { children } ) => {
    return ( 
        <div className={styles.container}>
        <Head>
          <title>Ten Flags Theme Park</title>
          <meta name="description" content="Welcome to the Ten Flags Theme Park website." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
            <Header />
            { children}
        </main>
  
        {/* <Footer /> */}
  
      </div>
     );
}
 
export default Layout;