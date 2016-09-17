import React from 'react'
import {connect} from 'react-redux'
import {fetchUser, setUserName, setUserAge} from '../actions/userActions'

//  To enable @connect, install 'babel-plugin-transform-decorators-legacy'.
//  It will inject props (i.e. the return values) into in the 'layout' component when it is loaded.
@connect((store) => {    
  return {               
    user: store.userA.user,
    initialUser: store.userA.users,   // 'test' => can be called anything, e.g. 'userList'
    tweet: store.tweetsZ.tweets
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch(setUserName("Julius Caesar"));
    this.props.dispatch(setUserAge(2116));
  }
  render() {
    console.log(this.props);
  	return ( 
  	  <div>
        <h2>{this.props.user.name}</h2>
        <h3>Would-be age now = {this.props.user.age}</h3>
      </div>
  	);
  }
}