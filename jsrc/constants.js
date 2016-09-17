import React from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router'

// see variant of 'const Container' at the end below
export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
)
export const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;&nbsp;

  </div>
)
export const Home = () => (
  <h1>Home Sweet Home!</h1>
)
export const Address = (props) => (
  <div>
    <br />
    <h1>Hello Hello!</h1>
    <h1>We are located at 234 5th Avenue, New York, NY, USA.</h1>
      {props.children}
  </div>
)
export const About = (props) => (
  <div>
    <h1>Welcome to the About Page</h1>
    {props.params.name && <h2>Hi there, {props.params.name}!</h2>}
  </div>
)
