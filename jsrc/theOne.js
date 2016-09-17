import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './app.js'
import Root from '../dev/js/components/root' 
import store from '../dev/js/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('myMan')
)

