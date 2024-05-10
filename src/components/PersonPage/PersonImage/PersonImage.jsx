import { useState, useEffect } from 'react';
import styles from './PersonImage.module.css';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonToFavorite } from '@store/actions'
import iconFavorite from './img/favorite.svg'
import iconFavoriteNot from './img/favorite-empty.svg'
  
const PersonImage = ({personFavorite, setPersonFavorite, personId, personPhoto, personName}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        } 
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
          <img className={styles.photo} src={personPhoto} alt={personName}></img>
          <img onClick={dispatchFavoritePeople} 
            src={personFavorite ? iconFavorite : iconFavoriteNot }
            alt='Add to favorite'
            className={styles.favorite}>
          </img>
        </div>
    </>
  )
}

export default PersonImage;