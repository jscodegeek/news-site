import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const { articles, toggleOpenItem, openItemId } = this.props
        const articleElements = articles.map(article => 
            <li key = {article.id}>
                <Article article = {article}
                    isOpen = {openItemId == article.id}
                    onClick = {toggleOpenItem(article.id)}
                    ref = {this.getArticleRef}    
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
        console.log('---', findDOMNode(article))
    }
}

export default accordion(ArticleList)