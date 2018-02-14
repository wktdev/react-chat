import React, { Component } from 'react';


class MessageList extends Component {

	constructor(props){
		super(props)

		this.state = {
          messages:[]

		}

		this.messagesRef = this.props.firebase.database().ref('messages')



	}

	componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       console.log(message);
     });
 
  }



	render(){
		console.log(this.messagesRef);
		return <div> <b> Active room key: {this.props.activeRoom} </b></div>
	}
}

export default MessageList