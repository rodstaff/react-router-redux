import React, { Component } from 'react'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents} >
            <IndexRoute components={{ title: aTitle, subTitle: aSubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
const aTitle = () => (
  <h1>testing: Title Component</h1>
)

const aSubTitle = () => (
  <h1>testing:  SubTitle Component</h1>
)

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)
const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
  </div>
)
// const Nav = () => (
//   <div>
//     <IndexLink activeStyle={{color:'#53acff'}} to='/'>Home</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/address'>Address</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/about'>About</IndexLink>
//   </div>
// )

// const Nav = () => (
//   <div>
//     <Link to='/'>Home</Link>&nbsp;
//     <Link to='/address'>Address</Link>
//   </div>
// )
const Container = (props) => <div>
  <Nav /> {props.children}
</div>

const Home = () => <h1>Home Sweet Home!</h1>

const Address = (props) => <div>
  <br />
  <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/address/instagram'>Instagram Feed</IndexLink>
  <h1>We are located at 234 5th Avenue, New York, NY, USA.</h1>
  {props.children}
</div>
// const Address = (props) => <div>
//   <br />
//   <Link to='/address'>Twitter Feed</Link>&nbsp;
//   <Link to='/address/instagram'>Instagram Feed</Link>
//   <h1>We are located at 234 5th Avenue, New York, NY, USA.</h1>
//   {props.children}
// </div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const About = (props) => (
  <div>
    <h1>Welcome to the About Page</h1>
    {props.params.name && <h2>Hi there, {props.params.name}!</h2>}
  </div>
)
const NotFound = () => <h1>404: This page is not found!</h1>

// export default App // -> this has the same effect as 'export default class App...' above!

