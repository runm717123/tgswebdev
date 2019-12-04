import {authActions} from '../actions/actionTypes';

const initialState = {
  user: {
    username: '',
    token: '',
    shopname: '',
    isAdmin: true,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case authActions.tokenGranted:
      return action;
    case authActions.logout:
      return initialState;
    default:
      return state;
  }
}
