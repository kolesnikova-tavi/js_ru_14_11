import React, {Component} from 'react'

class Comment extends Component {
	//конструктор здесь лишний. + Этот компонент лучше вообще на Functional Component переписать
	constructor() {
		super()
	}
	
	render() {
		const {comment} = this.props
		const title = comment.title ? <h4>{comment.title}</h4> : null
		return (
			<div>
				<h5>{comment.user}</h5>
				{title}
				{comment.text}
			</div>
		)
	}
}

export default Comment
