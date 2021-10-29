import styles from '../styles/Events.module.css'

const Events = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.eventsImage}>
                <div className={styles.eventsOverlay}>
                    <div className={styles.bigHeroText}>
                        SO MUCH TO EXPERIENCE
                    </div>
                    <div className={styles.smallHeroText}>
                        BLOG PICS
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Events;