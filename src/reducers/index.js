import {combineReducers} from 'redux';
import {authReducer} from './authentification';

const appReducers = combineReducers({
  authReducer,
});
export default appReducers;
