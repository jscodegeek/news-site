import React, {PropTypes}  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <by>{user}</by>
        </div>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.string
}

Comment.defaultProps = {
    text: '',
    user: ''
}

export default Comment