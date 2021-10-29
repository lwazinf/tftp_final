import styles from '../styles/Accom.module.css'

const Accom = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.accomImage}>
                <div className={styles.accomOverlay}>
                    <div className={styles.bigHeroText}>
                        WELCOME TO ELYSIUM
                    </div>
                    <div className={styles.smallHeroText}>
                        BLOG PICS
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Accom;