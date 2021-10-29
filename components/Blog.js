import styles from '../styles/Blog.module.css'
import Food from './Food'
import Events from './Events'
import Accom from './Accom'

const Blog = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles._Heading}>
                The little things matter
            </div>
            <div className={styles._Sub}>
                The Ten Flags Theme Park staff give you seamless service due to their attention to detail..
            </div>
            <Food />
            <Events />
            <Accom />
        </div>
     );
}
 
export default Blog;