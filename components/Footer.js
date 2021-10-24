import styles from '../styles/Footer.module.css'

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.footerCol}></div>
                <div className={styles.footerCol}>
                    <div className={styles.footerColHeading}>Support</div>
                    <div className={styles.footerColSub}>Contact Us</div>
                    <div className={styles.footerColSub}>Locate Us</div>
                    <div className={styles.footerColSub}>FAQ</div>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerColHeading}>Services</div>
                    <div className={styles.footerColSub}>About Ten Flags</div>
                    <div className={styles.footerColSub}>Downloads</div>
                    <div className={styles.footerColSub}>Functions</div>
                    <div className={styles.footerColSub}>Careers</div>
                </div>
                <div className={styles.footerCol}></div>
            </div>
        </div>
     );
}
 
export default Footer;