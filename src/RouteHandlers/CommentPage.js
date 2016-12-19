import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from '../components/Comment'

class CommentPage extends Component {
    static propTypes = {

    };

    render() {
        const commentItems = this.props.comments.map((comment) => (
            <li key={comment.id}><Comment comment = {comment} /></li>
        ))
        return (
            <ul key={this.props.params.num}>
                {commentItems}
            </ul>
        )
    }
}

export default connect((store, props) => {
    let num = props.params.num || 1
    const comments = store.comments.entities.toArray()
    const count = 5
    const min = 1
    const max = Math.floor(comments.length/count) + 1;
    if (num < min) num = min
    if (num > max) num = max
    return {
        comments: comments.length ? comments.slice((num - 1)*count, num*count)  : []
    }
})(CommentPage)