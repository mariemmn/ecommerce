import {LOG_IN, LOG_OUT} from './types';

export const logIn = token => {
  return {type: LOG_IN, token};
};

export const logOut = () => {
  return {type: LOG_OUT};
};
