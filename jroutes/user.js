import React from 'react'

import Usera from '../dev/js/components/user'
import store from '../dev/js/store'

export const User = () => (
  <div>
    <br />
    <h1>This is the User Page</h1>
    <Usera store={store}/>
  </div>
)

