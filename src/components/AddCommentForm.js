import React, { Component } from 'react'

class AddCommentForm extends Component {
    state = {
        commentText: ''
    }

    render() {
        return (
            <div>
                <h5>Add new comment:</h5>
                <textarea type='text' value={this.state.commentText} onChange={this.handleChange}/>
                <div>
                    <input type='button' value='clear' onClick={this.handleClear}/>
                    <input type='button' value='save' onClick={this.handleSave}/>
                </div>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 500) return 
        this.setState({
            commentText: ev.target.value
        })
    }

    handleSave = () => {
        console.log('next comment was saved: ', this.state.commentText);
    }

    handleClear = () => {
        this.setState({
            commentText: ''
        })
    }
}

export default AddCommentForm