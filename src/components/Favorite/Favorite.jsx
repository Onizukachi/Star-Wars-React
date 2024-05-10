import styles from './Favorite.module.css';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import icon from './img/bookmark.png'

const Favorite = () => {
    const [count, setCount] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })

  return (
    <div className={styles.container}>
        <NavLink to="/favorites">
            <span className={styles.counter} >{count}</span>
            <img  className={styles.icon} src={icon} alt='Favorites'></img>
        </NavLink>
    </div>
  )
}

export default Favorite;