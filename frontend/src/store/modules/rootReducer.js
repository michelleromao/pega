import { combineReducers } from 'redux';
import user from './user/reducer';
import bag from './bag/reducer';

export default combineReducers({
  user,
  bag,
});
