import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'


const PeopleNavigation = ({getResource, prevPage, nextPage, currPage}) => {
    const handleChangeNext = () => { 
        getResource(nextPage);
    }

    const handleChangePrev = () => { 
        getResource(prevPage);
    }

    return (<div>
        <Link to={`/people/?page=${currPage-1}`} className={styles.link}>
            <button disabled={!prevPage} onClick={handleChangePrev} className={styles.buttons}>Previous</button>
        </Link> 
        <Link to={`/people/?page=${currPage+1}`} className={styles.link}>
            <button  disabled={!nextPage}onClick={handleChangeNext} className={styles.buttons}>Next</button>
        </Link>
    </div>)
}

export default PeopleNavigation;
