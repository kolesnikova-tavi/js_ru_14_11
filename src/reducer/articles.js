import { articles } from '../fixtures'
import { DELETE_ARTICLE, SET_FILTERS } from '../constants'

export default (articlesState = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)
        case SET_FILTERS:
            return articles.filter(article => {
                const date = new Date(article.date)
                const {from, to} = payload
                Array.of(date, from, to).forEach(el => {
                    el ? el.setHours(0,0,0,0) : ''
                })
                return date - (from || date) >= 0 && date - (to || date) <= 0
            })
    }

    return articlesState
}