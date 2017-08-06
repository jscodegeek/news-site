import React, { PropTypes } from 'react'
import Article from './Article'

export default class ArticleList extends React.Component {
    state = {
        openArticleId : null
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const { articles } = this.props
        const articleElements = articles.map(article => 
            <li key = {article.id}>
                <Article article = {article}
                    isOpen = {this.state.openArticleId == article.id}
                    onClick = {this.toggleOpenArticle(article.id)}    
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