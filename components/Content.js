import styles from '../styles/Content.module.css'
import Image from 'next/image'

const Content = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.brands}></div>
                <div className={styles.bigContent}>Corporate/School Packages</div>
                <div className={styles.rowContent}>
                    <div className={styles.contentItem}>
                        <div className={styles.contentImage}>
                            {/* <Image src={"/assets/range.jpg"} alt={"Content Image"} width={450} height={250} /> */}
                        </div>
                        <div className={styles.imageText}></div>
                    </div>
                </div>
            </div>
        </div>
         );
}
 
export default Content;