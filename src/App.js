import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import * as firebase from 'firebase';
import './App.css';



  var config = {
    apiKey: "AIzaSyCHIkxcG02JLKyqfEvm9V9Qo7_mY_OkIPo",
    authDomain: "react-chat-408c5.firebaseapp.com",
    databaseURL: "https://react-chat-408c5.firebaseio.com",
    projectId: "react-chat-408c5",
    storageBucket: "react-chat-408c5.appspot.com",
    messagingSenderId: "1056532912519"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeRoom: undefined,
      user:undefined
    };

    this.setRoom = this.setRoom.bind(this);
    this.setUser = this.setUser.bind(this);

  }

   setRoom(room) {
      this.setState({activeRoom: room});

  }

  setUser(user) {
    this.setState({user: user});
   
  }

  render() {

    return (
      <div className="App">
        <User firebase={firebase} setUser={this.setUser} user={this.state.user}/>
         <RoomList firebase={firebase} setRoom={this.setRoom} />
         <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
    );
  }
}

export default App;
