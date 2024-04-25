import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResponse, changeHTTP } from '@utils/network'
import { getPeopleImage, getPeopleId, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams';
import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currPage, setCurrPage] = useState(1)


  const query = useQueryParams();
  const queryPage = query.get('page');


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
      setNextPage(changeHTTP(res.next))
      setPrevPage(changeHTTP(res.previous))
      setCurrPage(getPeoplePageId(url))
      setErrorApi(false)
    }
    else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [])

  return (
    <>
      <PeopleNavigation  getResource={getResource} prevPage={prevPage} nextPage={nextPage} currPage={currPage} />
      {people && <PeopleList people={people}/>}
    </>
  )
}

PeopleList.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);
