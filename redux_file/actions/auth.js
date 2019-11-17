import {authActions} from './actionTypes';

export const acLogin = {
  login: payload => ({type: authActions.doLogin, state: {...payload}}),
};

export const acRegister = {
  register: payload => ({type: authActions.doRegister, state: {...payload}}),
};

// export function doRegister(payload) {
//   console.log('doRegister executed');
//   return {
//     type: authActions.doRegister,
//     payload: {...payload},
//   };
// }
