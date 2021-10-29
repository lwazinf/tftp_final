import styles from '../styles/Features.module.css'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Features = () => {
    return ( 
        <div className={styles.container}>
            <Element name="about" className="element"></Element>
            <div className={styles.featureHeading}>
                The little things matter
            </div>

            <div className={styles.featureSub}>
                The Ten Flags Theme Park staff give you seamless service due to their attention to detail..
            </div>

            <div className={styles.features}>
                <div className={styles.feature1}>
                    <div className={styles.feature1_top}>
                        <div className={styles.feature1Overlay}></div>
                    </div>
                    <div className={styles.feature1_bottom}></div>
                </div>
                <div className={styles.feature2}>
                    <div className={styles.feature2_top}>
                        <div className={styles.feature2Overlay}></div>
                    </div>
                    <div className={styles.feature2_bottom}></div>
                </div>
                <div className={styles.feature3}>
                    <div className={styles.feature3_top}>
                        <div className={styles.feature3Overlay}></div>
                    </div>
                    <div className={styles.feature3_bottom}></div>
                </div>
            </div>
        </div>
     );
}
 
export default Features;