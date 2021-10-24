import styles from '../styles/Food.module.css'
import Image from 'next/image'

const Food = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.foodImage}>
                <div className={styles.foodOverlay}></div>
            </div>
        </div>
     );
}
 
export default Food;