import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	},
	
	render() {
		const {comments} = this.props;
		if (!comments || !comments.length) {
			return null;
		}
		
		const commentItems = comments.map(comment => 
			<li key={comment.id}><Comment comment={comment} /></li>
		);
		const labelText = this.state.isOpen ? 'Скрыть' : 'Показать';
		const commentList = this.state.isOpen ? <ul>{commentItems}</ul> :null;
		
		return (
			<p onClick={this.handleClick}>{labelText}</p>
			{commentList}
		);
	},
	
	handleClick(ev) {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
};

export default CommentList;