import React from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router'
import {Container, Home, Address, TwitterFeed, Instagram, Query, About, NamedComponents, aTitle, aSubTitle, NotFound} from './constants'

export default class App extends React.Component {
  render () {

    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query} />
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
