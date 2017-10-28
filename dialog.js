import React, { Component } from 'react';

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	render () {
		return (
			
			<div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" ref="myText" placeholder="你想做点什么"/>
				</div>
				<div>
					<input type="button" value="Save Task" onClick={this.handleClick}/>
				</div>
			</div>
			
		);
	}
}

export default TodoList;