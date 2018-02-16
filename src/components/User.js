import React, { Component } from 'react';


class User extends Component {

    constructor(props){
        super(props)
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this)
    }

    componentDidMount() {
       this.props.firebase.auth().onAuthStateChanged( user => {
          this.props.setUser(user);
       });
    }

    signIn() {
      this.props.firebase.auth().signInWithPopup( new this.props.firebase.auth.GoogleAuthProvider() );
    }
    
    signOut() {
      this.props.firebase.auth().signOut();
    }

    render() {


        return (
            <div>
            <div>{ this.props.user ? this.props.user.displayName : 'Guest' }</div>
                 <button onClick={this.signIn}>SIGN IN</button>
                 <button onClick={this.signOut}>SIGN OUT</button>
            </div>

        )
    }
}

export default User