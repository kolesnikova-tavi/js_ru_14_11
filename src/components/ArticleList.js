import React, {Component, PropTypes}  from 'react'
import Article from './Article'
import Accordion from '../decorators/accordionOpen'

function ArticleList(props) {

    const {articles, openId, toggleOpen} = props

    const articleItems = articles.map(article => (
        <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openId}
                toggleOpen={toggleOpen(article.id)}
            />
        </li>
    ))

    return (
        <ul>
            {articleItems}
        </ul>
    )

}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    openId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired
}

export default Accordion(ArticleList)