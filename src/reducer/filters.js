import {SET_FILTERS} from '../constants'

export default (filtersState = {from: null, to: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_FILTERS:
            return payload
    }

    return filtersState
}