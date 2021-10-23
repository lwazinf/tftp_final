import styles from '../styles/Features.module.css'

const Features = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.featureHeading}>
                The little things matter
            </div>

            <div className={styles.featureSub}>
                The Ten Flags Theme Park staff give you seamless service due to their attention to detail..
            </div>

            <div className={styles.features}>
                <div className={styles.feature1}>
                    <div className={styles.feature1_top}></div>
                    <div className={styles.feature1_bottom}></div>
                </div>
                <div className={styles.feature2}>
                    <div className={styles.feature2_top}></div>
                    <div className={styles.feature2_bottom}></div>
                </div>
                <div className={styles.feature3}>
                    <div className={styles.feature3_top}></div>
                    <div className={styles.feature3_bottom}></div>
                </div>
            </div>
        </div>
     );
}
 
export default Features;