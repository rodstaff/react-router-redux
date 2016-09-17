import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import Root from '../dev/js/components/root' 
import store from '../dev/js/store'

// ReactDOM.render(<Root store={store} />, document.getElementById('myMan'))
ReactDOM.render(<App />, document.getElementById('myMan'))