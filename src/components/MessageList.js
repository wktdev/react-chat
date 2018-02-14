import React, { Component } from 'react';


class MessageList extends Component {

	constructor(props){
		super(props)

		this.state = {

		}
	}

	render(){
		return <div> <b> {this.props.activeRoom} </b></div>
	}
}

export default MessageList