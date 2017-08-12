import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import CSSTansition from 'react-addons-css-transition-group'
import './style.css'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        onClick: PropTypes.func
    }

/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    componentDidMount() {
        console.log('---', this.refs.container)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //    return this.props.isOpen != nextProps.isOpen      
    // }

    componentWillUpdate() {
        console.log('---', 'updating article')
    }

    render() {
        const { article, onClick } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                <CSSTansition transitionName='article-body' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTansition>                
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }
}