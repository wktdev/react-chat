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
        <h2>ROOM</h2>
        <ul>

          <form onSubmit={this.createRoom}>
            <input type='text' ref={(value)=> this.newRoom = value} onChange={ (event) => this.setState({name: event.target.value})}/>
            <input type='submit'/>
          </form>

          <div>{this.state.name}</div>

           {
             this.state.rooms.map((val,index)=>{
               return <li key={index} onClick={ () => this.props.setRoom(val.key) }>{val.name}</li>   
             })  
           }
           
        </ul>
     </div>
  	)
  }
  
}

export default RoomList