import {SET_FILTERS} from '../constants'

export function setFilters(from, to) {
    return {
        type: SET_FILTERS,
        payload: {
            from,
            to
        }
    }
}