import { INSERT_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case INSERT_COMMENT:
            const comment = {...payload}
            delete comment.articleId
            return comments.set(payload.id, comment)
    }

    return comments
}