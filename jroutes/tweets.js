import React from 'react'

import Tweetsa from '../dev/js/components/tweets'
import store from '../dev/js/store'


export const Tweets = (props) => (
  <div>
    <br />
    <h1>Welcome to the Tweets Page</h1>
    <Tweetsa store={store}/>
  </div>
)