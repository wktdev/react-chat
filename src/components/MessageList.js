import React, { Component } from 'react';


class MessageList extends Component {

	constructor(props){
		super(props)

		this.state = {

		}

	}

	render(){
		console.log(this.messagesRef);
		return <div> <b> Active room key: {this.props.activeRoom} </b></div>
	}
}

export default MessageList