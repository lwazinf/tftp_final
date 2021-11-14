import styles from '../styles/Header.module.css'
import Image from 'next/image'
import React, { useState } from 'react';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = () => {
    const [nav, setNav] = useState("home");
    const [home, setHome] = useState({ transition: 'all 1s', fontWeight: 700 });
    const [activities, setActivities] = useState({ transition: 'all 1s', fontWeight: 400 });
    const [blog, setBlog] = useState({ transition: 'all 1s', fontWeight: 400 });
    const [about, setAbout] = useState({ transition: 'all 1s', fontWeight: 400 });
    const divPillow = { width: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', };
    

    const SwitchNav = (e) => {
         setNav(e)
         if (e == "home") {
            setHome({ transition: 'all 1s', fontWeight: 700 })
            setActivities({ transition: 'all 1s', fontWeight: 400 })
            setBlog({ transition: 'all 1s', fontWeight: 400 })
            setAbout({ transition: 'all 1s', fontWeight: 400 })
         }else if (e == "activities") {
            setHome({ transition: 'all 1s', fontWeight: 400 })
            setActivities({ transition: 'all 1s', fontWeight: 700 })
            setBlog({ transition: 'all 1s', fontWeight: 400 })
            setAbout({ transition: 'all 1s', fontWeight: 400 })
         }else if (e == "blog") {
            setHome({ transition: 'all 1s', fontWeight: 400 })
            setActivities({ transition: 'all 1s', fontWeight: 400 })
            setBlog({ transition: 'all 1s', fontWeight: 700 })
            setAbout({ transition: 'all 1s', fontWeight: 400 })
         }else if (e == "about") {
            setHome({ transition: 'all 1s', fontWeight: 400 })
            setActivities({ transition: 'all 1s', fontWeight: 400 })
            setBlog({ transition: 'all 1s', fontWeight: 400 })
            setAbout({ transition: 'all 1s', fontWeight: 700 })
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.actualLogo}>
                    <Image src={"/assets/tftp_logo.png"} alt={"logo"} height={123} width={123} />
                </div>
            </div>
            
            <div className={styles.hud}>
                <Link activeClass="active" className="hero" to="hero" spy={true} smooth={true} offset={-170} duration={500}>
                    <div style={ { width: '35px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', } }>
                        <p className={styles.hudItem} style={ home } onClick={ (e) => SwitchNav("home")}>Home</p>
                    </div>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="activities" to="activities" spy={true} smooth={true} offset={-240} duration={500}>
                    <div style={ { width: '55px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', } }>
                        <p className={styles.hudItem} style={ activities } onClick={ (e) => SwitchNav("activities")}>Activities</p>
                    </div>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="blog" to="blog" spy={true} smooth={true} offset={-170} duration={500}>
                    <div style={ { width: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', } }>
                        <p className={styles.hudItem} style={ blog } onClick={ (e) => SwitchNav("blog")}>Blog</p>
                    </div>
                </Link>
                <p className={styles.hudDiv}>||</p>
                <Link activeClass="active" className="about" to="about" spy={true} smooth={true} offset={-260} duration={500}>
                    <div style={ { width: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', } }>
                        <p className={styles.hudItem} style={ about } onClick={ (e) => SwitchNav("about")}>About</p>
                    </div>
                </Link>
            </div>
            
        </ div>
    );
}
 
export default Header;