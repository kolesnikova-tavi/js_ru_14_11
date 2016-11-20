import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
	constructor() {
		super()
		this.state = {
			isOpen: false
		}
	}
	
	render() {
		const {comments} = this.props
		if (!comments || !comments.length) {
			return null
		}
		
		const labelText = this.state.isOpen ? 'Hide comments' : 'Show comments'
		const commentItems = this.state.isOpen ? comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>) : null
		//лучше бы тоже написать this.state.isOpen, а еще лучше срузу достать эту переменную const { isOpen } = this.state
		const commentList = commentItems ? <ul>{commentItems}</ul> : null
		
		return (
			<div>
				<a href="#" onClick={this.handleClick}>{labelText}</a>
				{commentList}
			</div>
		)
	}
	
	handleClick = evt => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default CommentList
