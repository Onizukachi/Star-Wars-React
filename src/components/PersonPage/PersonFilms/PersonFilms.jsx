import styles from './PersonFilms.module.css';
import { useState, useEffect } from 'react';
import { makeConcurrentRequest, changeHTTP } from '@utils/network';

const PersonFilms = ({ personFilms }) => {
    const [filmsNames, setFilmsNames] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);
            setFilmsNames(response)
        })()
    }, [])

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsNames
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({title, episode_id}) => {
                        return (
                        <li className={styles.list__item} key={episode_id}> 
                            <span className={styles.item__episode}>Episode {episode_id}</span>
                            <span className={styles.item__column}>: </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default PersonFilms;