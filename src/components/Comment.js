import React, {Component} from 'react';

class Comment extends Component {
	constructor() {
		super();
	},
	
	render() {
		const {comment} = this.props;
		const title = comment.title ? <h4>{comment.title}</h4> : null;
		return (
			<section>
				{title}
				<h5>{comment.user}</h5>
				{comment.text}
			</section>
		);
	}
};

export default Comment;