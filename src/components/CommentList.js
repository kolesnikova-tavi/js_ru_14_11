import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllComments, addComment } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        // commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps(nextProps) {
        //console.log('---', 'CL receiving props')
        const {isOpen, article, loadAllComments} = nextProps
        if (article.commentsLoaded === false && article.commentsLoading === false) {
            if (isOpen && !this.props.isOpen) loadAllComments(article.id)
        }
    }


    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }


    getBody() {
        const { article, comments, isOpen, addComment } = this.props

        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />

        if (this.props.loading) return (
            <div>
                <Loader />
                {commentForm}
            </div>
        )
        if (!isOpen || !comments.length) return <div>{commentForm}</div>

        const commentItems = comments.map(comment => {
            if (comment) return(
                <li key = {comment.id}><Comment comment = {comment} /></li>
            )
        })
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    comments: (props.article.comments || []).map(id => state.comments.getIn(['entities', id])),
    loading: state.comments.get('loading')
}), { loadAllComments, addComment })(toggleOpen(CommentList))