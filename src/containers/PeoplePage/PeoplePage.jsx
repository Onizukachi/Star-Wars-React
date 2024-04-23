import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getApiResponse } from '@utils/network'
import { getPeopleImage, getPeopleId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api'
import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi }) => {
  const [people, setPeople] = useState(null);


  const getResource = async (url) => {
    const res = await getApiResponse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
  
        return { 
          id,
          name,
          img
        }
      })
      setPeople(peopleList);
      setErrorApi(false)
    }
    else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE);
  }, [])

  return (
    <>
      <h1 className='header__text'>Navigation</h1>
      {people && <PeopleList people={people}/>}
    </>
  )
}

PeopleList.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);