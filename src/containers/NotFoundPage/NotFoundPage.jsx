import { useLocation } from 'react-router-dom'
import styles from './NotFoundPage.module.css';
import img from './img/not_found.png'

const NotFoundPage = () => {
    let location = useLocation();
    console.log(location.pathname)
  return (
    <>
        <img className={styles.img} src={img} alt='Not Found'></img>
        <p className={styles.text}>No match for {location.pathname}</p>
    </>
  )
}

export default NotFoundPage;
