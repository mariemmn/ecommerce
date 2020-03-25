//TODO: #AUTHENTIFICATION# REDUCER
import {LOG_IN, LOG_OUT} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  token: '000000',
  user: {
    firstName: 'Mariem',
    lastName: 'Mohamed',
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: true, token: action.token};
      break;
    case LOG_OUT:
      return initialState;
      break;
    default:
      return initialState;
  }
  return state;
};
