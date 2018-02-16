import React, { Component } from 'react';


class MessageList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: []

        }

        this.messagesRef = this.props.firebase.database().ref('messages')



    }

    componentDidMount() {
        let temp = [];
        this.messagesRef.on('child_added', snapshot => {
            console.log(snapshot.val());

            temp.push(snapshot.val())

            this.setState({
                messages: temp
            })

            console.log(this.state.messages);

        });

    }



    render() {


        let result = this.state.messages.map((val, index) => {
            console.log(val.roomId);

            if (this.props.activeRoom === val.roomId) {
                return <li key={index}>{val.content}</li>
            }else{
            	return undefined
            }
        })

        return (
            <div>
            <h2>MESSAGES</h2>
              <ul>
              {result}
              </ul>

            </div>

        )



    }
}

export default MessageList