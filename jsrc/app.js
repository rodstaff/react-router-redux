import React from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router'
import {Container, Home, Address, About, NotFound} from './constants'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import store from '../dev/js/store'

const history = syncHistoryWithStore(browserHistory, store)

export default class App extends React.Component {
  render () {

    return (
      <Router history={history}>
        <Route path='/' component={Container}>

          <IndexRoute component={Home} />
          <Route path='address' component={Address} />  
          <Route path='/about(/:name)' component={About} />
          <Route path='*' component={NotFound} />

        </Route>
      </Router>
    )
  }
}
