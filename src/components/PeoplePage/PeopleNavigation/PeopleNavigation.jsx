import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'
import UIButton from '@ui/UIButton'


const PeopleNavigation = ({getResource, prevPage, nextPage, currPage}) => {
    const handleChangeNext = () => { 
        getResource(nextPage);
    }

    const handleChangePrev = () => { 
        getResource(prevPage);
    }

    return (<div className={styles.container}>
        <Link to={`/people/?page=${currPage-1}`} className={styles.buttons}>
            <UIButton text='Previous' disabled={!prevPage} onClick={handleChangePrev} />
        </Link> 
        <Link to={`/people/?page=${currPage+1}`} className={styles.buttons}>
            <UIButton text='Next' disabled={!nextPage} onClick={handleChangeNext} />
        </Link>
    </div>)
}

export default PeopleNavigation;
