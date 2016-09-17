import {combineReducers} from 'redux'
import TweetsReducer from './tweetsReducer'
import UserReducer from './userReducer'

const allReducers = combineReducers({
  tweetsZ:  TweetsReducer,
  userA:  UserReducer
});
export default allReducers;