import {authActions} from '../actions/actionTypes';

const initialState = {
  name: 'jarv',
  pass: '1',
  photo: '-',
  loggedIn: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case authActions.doLogin:
      console.log('LOGIN executed..!', state, action, 'login executed');
      // return {state, ...action};
      return {
        ...action.payload,
      };
    case 'LOGOUT':
      return initialState;
    case authActions.doRegister:
      return {
        action,
      };
    default:
      return state;
  }
}
