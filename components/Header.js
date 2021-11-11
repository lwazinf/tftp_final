import styles from '../styles/Header.module.css'
import Image from 'next/image'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={"/assets/tftp_logo.png"} alt={"logo"} height={123} width={123} />
            </div>
            
            <div className={styles.hud}>
                <Link activeClass="active" className="hero" to="hero" spy={true} smooth={true} offset={-170} duration={500}>
                    <p className={styles.hudItem}>Home</p>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="activities" to="activities" spy={true} smooth={true} offset={-240} duration={500}>
                    <p className={styles.hudItem}>Activities</p>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="blog" to="blog" spy={true} smooth={true} offset={-170} duration={500}>
                    <p className={styles.hudItem}>Blog</p>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="about" to="about" spy={true} smooth={true} offset={-220} duration={500}>
                    <p className={styles.hudItem}>About</p>
                </Link>
            </div>
            
        </ div>
    );
}
 
export default Header;