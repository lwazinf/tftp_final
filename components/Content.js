import styles from '../styles/Content.module.css'
import Flickity from 'react-flickity-component'
import Image from 'next/image'

const flickityOptions = {
    initialIndex: 2
}

const Content = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.brands}></div>
                <div className={styles.bigContent}>Theme Park Packages</div>
                
                {/* <div className={styles.flick}> */}
                    {/* <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                        >
                        <div className={styles.flick}>
                            <img src="/assets/hero.jpg"/>
                        </div>
                        <div className={styles.flick}>
                            <img src="/assets/range.jpg"/>
                        </div>
                    </Flickity> */}
                {/* </div> */}

                <div className={styles.rowContent}>
                    <div className={styles.contentItem}>
                        <div className={styles.contentImage}>
                        </div>
                        <div className={styles.imageText}>
                            <p className={styles.imageTextHeading}>
                                TEAM BUILDING PACKAGE
                            </p>
                            <p className={styles.imageTextSub}>
                                Ndolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentItem}>
                        <div className={styles.contentImage}>
                        </div>
                        <div className={styles.imageText}>
                            <p className={styles.imageTextHeading}>
                                FAMILY PACKAGE
                            </p>
                            <p className={styles.imageTextSub}>
                                Ndolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
                            </p>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                        <Image src={'/assets/right_arrow.png'} alt={'Right arrow'} width={25} height={25} />
                    </div>
                </div>
            </div>
        </div>
         );
}
 
export default Content;