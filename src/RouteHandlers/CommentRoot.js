import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {loadAllComments} from '../AC/comments'
import Loader from '../components/Loader'

class CommentRoot extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllComments()
    }

    render() {
        if (this.props.loading) {
            return <Loader />
        }
        const count = Math.floor(this.props.comments.length / 5) + 1
        const listItems = new Array(count).fill(0).map((item, index) => (
            <li key={index + 1}>
                <Link to = {`/comments/${index + 1}`}>{index + 1}</Link>
            </li>
        ))
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default connect(state => {
    return {
        comments: state.comments.entities.toArray(),
        loading: state.comments.loading
    }
}, {loadAllComments})(CommentRoot)
