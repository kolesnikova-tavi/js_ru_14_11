import {INSERT_COMMENT} from '../constants'

export default store => next => action => {
    const { type, payload } = action
    switch(type) {
        case INSERT_COMMENT:
            action.payload.id = Math.round(Math.random() * 100)
    }
    next(action)
}