import { useState, useEffect, useCallback } from 'react'
import { getApiResponse } from '@utils/network'
import { debounce } from 'lodash'
import PropTypes from 'prop-types';
import { API_SEARCH } from '@constants/api'
import { getPeopleImage, getPeopleId } from '@services/getPeopleData';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UIInput from '@ui/UIInput';
import styles from './SearchPage.module.css'

const SearchPage = ({setErrorApi}) => {
    const [people, setPeople] = useState([]);
    const [inputSeatchValue, setInputSearchvalue] = useState('');

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300), []
    )

    const handleInputChange = (value) => {
        setInputSearchvalue(value)
        debouncedGetResponse(value)
    }

    const getResponse = async (param="") => {
        const res = await getApiResponse(API_SEARCH + param);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id, 
                    name, 
                    img
                }
            })

            setPeople(peopleList)
            setErrorApi(false)

        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse()
    }, [])

  return (
    <>
      <h1 className='header__text'>Search</h1>
      <UIInput 
        value={inputSeatchValue} 
        handleInputChange={handleInputChange} 
        placeHolder={"Input character's name"}
        classes={styles.input__search}
        />

        <SearchPageInfo people={people} />
    </>
  )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
  }

export default withErrorApi(SearchPage);
