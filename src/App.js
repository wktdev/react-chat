import React, { Component } from 'react';
import RoomList from './components/RoomList';
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
  render() {
    return (
      <div className="App">
         
         <RoomList firebase={firebase}/>
       
      </div>
    );
  }
}

export default App;
