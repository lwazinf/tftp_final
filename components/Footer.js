import styles from '../styles/Footer.module.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Image from 'next/image'
import CTAction from './CTaction'

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.footerCol2}>
                    <Link activeClass="active" className="hero" to="hero" spy={true} smooth={true} offset={-150} duration={500}>
                        <div className={styles.logo}>
                            TEN FLAGS
                        </div>
                    </Link>

                    <div className={styles.footerColSub2}>
                        <a className={styles.footerLoc} target="_blank" href="https://www.google.com/maps/place/Ten+Flags+Theme+Park/@-25.7632187,27.3436316,17z/data=!3m1!4b1!4m5!3m4!1s0x1ebe0590ef207d85:0x2a69f977da6948f1!8m2!3d-25.7632235!4d27.3458203" rel="noopener noreferrer">
                            Farm Karussel, 572 Rex Rd, Rustenburg, 0300
                        </a>
                    </div>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerColHeading}>Support</div>
                    <a href="#" className={styles.footerColSub}>Downloads</a>
                    <a href="#" className={styles.footerColSub}>About Us</a>
                    <a href="#" className={styles.footerColSub}>FAQ</a>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerColHeading}>Services</div>
                    <a href="#" className={styles.footerColSub}>Functions</a>
                    <a href="#" className={styles.footerColSub}>Partners</a>
                    <a href="#" className={styles.footerColSub}>Careers</a>
                </div>
                <div className={styles.footerColSub2}>
                    <div className={styles.cta}>
                        <CTAction />
                    </div>
                    <div className={styles.footerColSub2}>

                        <a target="_blank" className={styles._social} href="https://web.facebook.com/pg/tenflagz" rel="noopener noreferrer">
                            <Image src={"/assets/facebook.png"} alt={"logo"} height={35} width={35} />
                        </a>
                        <a target="_blank" className={styles._social} href="https://twitter.com/tenflags_sa" rel="noopener noreferrer">
                            <Image src={"/assets/twitter.png"} alt={"logo"} height={35} width={35} />
                        </a>
                        <a target="_blank" className={styles._social} href="https://www.instagram.com/tenflagsthemepark" rel="noopener noreferrer">
                            <Image src={"/assets/instagram.png"} alt={"logo"} height={35} width={35} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;