import styles from '../styles/Food.module.css'

const Food = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles._image}>
                <div className={styles._overlay}>
                    <div className={styles._textSection}>
                        <div className={styles._bigText}>
                            TEASE YOUR TASTEBUDS
                        </div>
                        <div className={styles._smallText}>
                            BLOG PICS
                        </div>
                    </div>
                    <div className={styles._imageSection}>
                        <div className={styles._subImage1}></div>
                        <div className={styles._subImage2}></div>
                        <div className={styles._subImage3}></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Food;