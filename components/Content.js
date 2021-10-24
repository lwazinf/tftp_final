import styles from '../styles/Content.module.css'
import Image from 'next/image'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Content = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.brands}></div>

                <div className={styles.slider}>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                        bullets={false}
                        buttons={false}
                    >
                        <div data-src="/assets/range.jpg" />
                        <div data-src="/assets/team.jpg" />
                        <div data-src="/assets/team2.jpg" />
                    </AutoplaySlider>
                </div>

                <div className={styles.bigContent}>Group packages</div>                
                <div className={styles.smallContent}>Find the right experience for your friends & family to enjoy!</div>                
                <div className={styles.rowContent}>
                    <div className={styles.contentItem}>
                        <div className={styles.contentImage1}>
                        </div>
                        <div className={styles.imageText}>
                            <p className={styles.imageTextHeading}>
                                {/* TEAM BUILDING PACKAGE */}
                            </p>
                            <p className={styles.imageTextSub}>
                                {/* Ndolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. */}
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentItem}>
                        <div className={styles.contentImage2}>
                        </div>
                        <div className={styles.imageText}>
                            <p className={styles.imageTextHeading}>
                                {/* FAMILY PACKAGE */}
                            </p>
                            <p className={styles.imageTextSub}>
                                {/* Ndolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. */}
                            </p>
                        </div>
                    </div>
                    {/* <div className={styles.arrow}>
                        <Image src={'/assets/right_arrow.png'} alt={'Right arrow'} width={25} height={25} />
                    </div> */}
                </div>
            </div>
        </div>
         );
}
 
export default Content;