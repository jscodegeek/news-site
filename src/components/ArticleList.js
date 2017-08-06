import React, { PropTypes } from 'react'
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

    toggleOpenArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}

export default accordion(ArticleList)