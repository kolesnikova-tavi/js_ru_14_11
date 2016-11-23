import React, {Component}  from 'react'
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

export default Accordion(ArticleList)