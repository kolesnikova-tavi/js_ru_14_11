import React, {Component, PropTypes} from 'react'

class CommentForm extends Component {
    state = {
        message: null
    };

    render() {
        return (
            <form action="#" method="post">
                <p>
                    <textarea
                        ref="message"
                        cols="50"
                        rows="4"
                        placeholder="Your Message"
                        onInput={this.handlerInput}
                    >{this.state.message}</textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        )
    }

    handlerInput = e => this.setState({
        message: this.refs.message.value
    })

    componentDidUpdate() {
        // console.log(this.state.message)
    }
}

export default CommentForm