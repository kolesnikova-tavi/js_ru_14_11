import { ADD_COMMENT, LOAD_ALL_COMMENTS } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadAllComments(article) {
    return {
        type: LOAD_ALL_COMMENTS,
        payload: {
            article
        },
        callAPI: '/api/comment'
    }

}