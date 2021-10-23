import styles from '../styles/Header.module.css'
import Image from 'next/image'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.logoImage}>
                <Image src={"/assets/tftp_logo.png"} alt={"logo"} height={120} width={120} />
                </div>
            </div>
            <div className={styles.hud}>
                <p className={styles.hudItem}>Home</p>
                <p className={styles.hudItem}>Blog</p>
                <p className={styles.hudItem}>About </p>
                <p className={styles.hudItem}>Corp. Events</p>
            </div>
            <div className={styles.misc}>

                {/* <button className={styles.button_68} role="button">Plan<br/>Ahead</button> */}

                <Image src={"/assets/facebook.png"} alt={"logo"} height={50} width={50} />
                <Image src={"/assets/twitter.png"} alt={"logo"} height={50} width={50} />
                <Image src={"/assets/instagram.png"} alt={"logo"} height={50} width={50} />

            </div>
        </ div>
    );
}
 
export default Header;