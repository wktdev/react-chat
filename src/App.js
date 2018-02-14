import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
      activeRoom: undefined
    };

    this.setRoom = this.setRoom.bind(this)

  }

   setRoom(name) {
    let tempState = this.state;
    tempState = {activeRoom:name}
    this.setState(tempState)
    console.log(this.state.activeRoom);
  }

  render() {
    return (
      <div className="App">
         
         <RoomList firebase={firebase} setRoom={this.setRoom} />
         <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>

         
       
      </div>
    );
  }
}

export default App;
