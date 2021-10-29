import styles from '../styles/Header.module.css'
import Image from 'next/image'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.logoImage}>
                    <Image src={"/assets/tftp_logo.png"} alt={"logo"} height={120} width={120} />
                </div>
            </div>
            <div className={styles.hud}>
                <Link activeClass="active" className="hero" to="hero" spy={true} smooth={true} offset={-150} duration={500}>
                    <p className={styles.hudItem}>Home</p>
                </Link>
                <Link activeClass="active" className="activities" to="activities" spy={true} smooth={true} offset={-200} duration={500}>
                    <p className={styles.hudItem}>Activities</p>
                </Link>
                <Link activeClass="active" className="blog" to="blog" spy={true} smooth={true} offset={-150} duration={500}>
                    <p className={styles.hudItem}>Blog</p>
                </Link>
                <Link activeClass="active" className="about" to="about" spy={true} smooth={true} offset={-220} duration={500}>
                    <p className={styles.hudItem}>About</p>
                </Link>
            </div>
            <div className={styles.misc}>

                {/* <button className={styles.button_68} role="button">Plan<br/>Ahead</button> */}

                <a target="_blank" href="https://web.facebook.com/pg/tenflagz" rel="noopener noreferrer">
                    <Image src={"/assets/facebook.png"} alt={"logo"} height={50} width={50} />
                </a>
                <a target="_blank" href="https://twitter.com/tenflags_sa" rel="noopener noreferrer">
                    <Image src={"/assets/twitter.png"} alt={"logo"} height={50} width={50} />
                </a>
                <a target="_blank" href="https://www.instagram.com/tenflagsthemepark" rel="noopener noreferrer">
                    <Image src={"/assets/instagram.png"} alt={"logo"} height={50} width={50} />
                </a>

            </div>
        </ div>
    );
}
 
export default Header;