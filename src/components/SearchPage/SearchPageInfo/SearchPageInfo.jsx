import { useEffect } from 'react';
import styles from './SearchPageInfo.module.css';
import { Link } from 'react-router-dom';

const SearchPageInfo = ({ people }) => {
  return (
    <>
      { people.length ? (
        <ul className={styles.list__container}>
           { people.map(({id, name, img}) => {
            return (
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.person_photo} src={img} alt={name} />
                        <p className={styles.person_name}>{name}</p>
                    </Link>
                </li>
            )
           }) }
        </ul>
      )  :
       <h2 className={styles.person_comment}>No Results</h2>
    }
    </>
  )
}

export default SearchPageInfo;
