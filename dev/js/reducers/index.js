import {combineReducers} from 'redux'
import TweetsReducer from './tweetsReducer'
import UserReducer from './userReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
  tweetsZ:  TweetsReducer,
  userA:  UserReducer,
  routing: routerReducer
});
export default allReducers;