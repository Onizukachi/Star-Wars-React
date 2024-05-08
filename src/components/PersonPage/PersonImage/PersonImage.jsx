import { useState, useEffect } from 'react';
import styles from './PersonImage.module.css';


const PersonImage = ({personPhoto, personName}) => {
  return (
    <>
      <div className={styles.container}>
          <img className={styles.photo} src={personPhoto} alt={personName}></img>
        </div>
    </>
  )
}

export default PersonImage;