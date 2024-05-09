import styles from './PersonLinkBack.module.css';
import { useNavigate } from 'react-router-dom';
import iconBack from '../img/arrow.svg' 

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleOnclick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <a href="#"
            onClick={handleOnclick}
            className={styles.link}
        >  
            <img className={styles.link__img} src={iconBack} alt='Go Back'></img>
            <span>Go Back</span>
        </a>
    )
}

export default PersonLinkBack;