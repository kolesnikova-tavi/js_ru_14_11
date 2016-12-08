import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, INSERT_COMMENT } from '../constants'
import Immutable, { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, Immutable.fromJS(article))
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.get('id') != payload.articleId)
        case INSERT_COMMENT:
            const {articleId, id} = payload
            return articlesState.updateIn([articleId, 'comments'], arr => arr.push(id))
    }

    return articlesState
}