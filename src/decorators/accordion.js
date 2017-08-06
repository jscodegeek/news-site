import React from 'react'

export default function accordion (Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openItemId: null 
        }

        toggleOpenItem = id => ev => {
            ev && ev.preventDefault && ev.preventDefault()
            this.setState({
                openItemId: id
            })
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
        }
    }
}