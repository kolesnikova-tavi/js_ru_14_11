import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap, ReducerState } from '../utils'
import { Record } from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultComments = arrayToMap([], CommentModel)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false,
})

export default (commentsState = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', generatedId], {...payload.comment, id: generatedId})

        case LOAD_ALL_COMMENTS + START:
            return commentsState.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrayToMap(response, CommentModel))
                .set('loading', false)
    }

    return commentsState
}