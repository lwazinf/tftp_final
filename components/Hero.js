import styles from "../styles/Hero.module.css";
import Image from "next/image";
import CTAction from "../components/CTAction";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Element name="hero" className="element"></Element>
      <div className={styles.hero}>
        <div className={styles.heroShade}>
          <div className={styles.heroText}>
          <div style={{position: "relative", top: "50px"}}>
          <div className={styles.bigHeroText} style={{position: "relative", top: "-30px", right: "120px", fontSize: "60px", letterSpacing: "0px", color: "orangered"}}>TEN</div>
            <div className={styles.bigHeroText} style={{position: "relative", top: "-100px", fontSize: "160px", letterSpacing: "-11px"}}>FLAGS</div>
            <div className={styles.bigHeroText} style={{position: "relative", top: "-170px", letterSpacing: "-6px", color: "orangered"}}>THEME PARK</div>
            <div style={{position: "relative", top: "-200px"}} >
            <CTAction />
            <div className={styles.smallHeroText}>EXPLORE, DISCOVER AND EXPERIENCE FUN THAT NEVER ENDS</div>
            </div>
            </div>
            {/* <div className={styles.miniHeroText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. */}
            {/* </div> */}
          </div>
          <div className={styles.heroLogo}>
            <div className={styles.holderMain}>
              <div className={styles.holder}></div>
            </div>
            <Image
              src={"/assets/tftp_logo.png"}
              alt={"logo"}
              height={380}
              width={380}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
