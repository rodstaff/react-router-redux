import React from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router'

import Usera from '../dev/js/components/user'
import Tweetsa from '../dev/js/components/tweets'
import store from '../dev/js/store'

// see variant of 'const Container' at the end below
export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
)
const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/user'>User</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/tweets'>Tweets</IndexLink>&nbsp;&nbsp;

  </div>
)
export const Home = () => (
  <div>
    <br />
    <h1>Home Sweet Home!</h1>
  </div>
)
export const User = () => (
  <div>
    <br />
    <h1>Welcome to the User Page</h1>
    <Usera store={store}/>
  </div>
)
export const Tweets = (props) => (
  <div>
    <br />
    <h1>Welcome to the Tweets Page</h1>
    <Tweetsa store={store}/>
  </div>
)
