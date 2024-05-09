import styles from './PersonPage.module.css';
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonImage from '@components/PersonPage/PersonImage'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import React, { useEffect, useState, Suspense } from 'react';
import { getApiResponse } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { useParams } from 'react-router-dom';
import { API_PEOPLE, API_PERSON } from '@constants/api'
import UILoading from '@ui/UILoading';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams()
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)

  useEffect(() => {
    const getResponse = async () => {
      const res = await getApiResponse(API_PERSON + `/${id}`)

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ])

        setPersonName(res.name)
        setPersonPhoto(getPeopleImage(id))
        setErrorApi(false)
        res.films.length && setPersonFilms(res.films)
      } else {
        setErrorApi(true)
      }
    }

    getResponse()
  }, [])

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} /> }
          {personFilms && 
            (<Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
            )
            }
        </div>
      </div>
    </>
  )

}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);