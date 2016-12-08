import {INSERT_COMMENT} from '../constants'

export function insertComment(articleId, user, text) {
    return {
        type: INSERT_COMMENT,
        payload: {
            articleId,
            user,
            text
        }
    }
}