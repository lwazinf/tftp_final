import styles from '../styles/Events.module.css'

const Events = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.eventsImage}>
                <div className={styles.eventsOverlay}></div>
            </div>
        </div>
     );
}
 
export default Events;