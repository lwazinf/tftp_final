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
            <div className={styles.bigHeroText}>IMMERSE IN ADVENTURE</div>
            <div className={styles.smallHeroText}>GENUINE NORTH WESTERN</div>
            <div className={styles.miniHeroText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <CTAction />
            </div>
            <div className={styles.holderMain}>
              <div className={styles.holder}></div>
            </div>
          </div>
          <div className={styles.heroLogo}>
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
