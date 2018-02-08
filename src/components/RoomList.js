import React, { Component } from 'react';
// import './RoomList.css';

class RoomList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: [],
 
    }
    this.createRoom = this.createRoom.bind(this)
    this.roomsRef = this.props.firebase.database().ref('rooms')
  }

 componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
 
  }

  createRoom(event){
    event.preventDefault()
    this.roomsRef.push({
      name: this.newRoom.value
    });

    this.newRoom.value = ""

  }

  render(){

  	return(
     <div>
        <ul>

          <form onSubmit={this.createRoom}>
            <input type='text' ref={(value)=> this.newRoom = value}/>
            <input type='submit'/>
          </form>

           {
             this.state.rooms.map(function(val,index){
               return <li key={index}>{val.name}</li>
  	         })
           }
           
        </ul>
     </div>
  	)
  }
  
}

export default RoomList