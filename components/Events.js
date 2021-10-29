import styles from '../styles/Events.module.css'

const Events = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles._image}>
                <div className={styles._overlay}>
                    <div className={styles._textSection}>
                        <div className={styles._bigText}>
                            SO MUCH TO EXPERIENCE
                        </div>
                        <div className={styles._smallText}>
                            BLOG PICS
                        </div>
                    </div>
                    <div className={styles._imageSection}>
                        <div className={styles._boxImage1}>
                            <div className={styles._subImage1}></div>
                        </div>
                        <div className={styles._boxImage2}>
                            <div className={styles._subImage2}></div>
                        </div>
                        <div className={styles._boxImage3}>
                            <div className={styles._subImage3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Events;