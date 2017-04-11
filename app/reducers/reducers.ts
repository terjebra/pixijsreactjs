import { combineReducers } from 'redux';
import info from './info';

const reducer = combineReducers({
  info: info
});

export default reducer;