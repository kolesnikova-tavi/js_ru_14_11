import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openId: null
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }

    toggleOpen = id => ev => {
        this.setState({
            openId: (this.state.openId === id) ? null : id
        })
    }
}