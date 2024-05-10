import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes'

export const setPersonToFavorite = person => {
    return (
        {
            type: ADD_PERSON_TO_FAVORITE,
            payload: person
        }
    )
}

export const removePersonToFavorite = personId => {
    return (
        {
            type: REMOVE_PERSON_FROM_FAVORITE,
            payload: personId
        }
    )
}