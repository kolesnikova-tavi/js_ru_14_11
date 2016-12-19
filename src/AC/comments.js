import { ADD_COMMENT, LOAD_COMMENTS, LOAD_ALL_COMMENTS } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENTS,
        callAPI: '/api/comment'
    }

}
export function checkAndLoadComments(articleId) {
    return (dispatch, getState) => {
        const { commentsLoaded, commentsLoading } = getState().articles.getIn(['entities', articleId])
        if (commentsLoaded || commentsLoading) return null
        dispatch({
            type: LOAD_COMMENTS,
            payload: { articleId },
            callAPI: `/api/comment?article=${articleId}`
        })
    }
}