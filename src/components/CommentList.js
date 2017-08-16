import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
                {this.getAddCommentForm()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {        
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    getAddCommentForm() {
        return <div><AddCommentForm/></div>
    }
}

export default toggleOpen(CommentList)