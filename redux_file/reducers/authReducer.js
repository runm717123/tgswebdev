import {authActions} from '../actions/actionTypes';

const initialState = {
  username: '',
  token: '',
  isAdmin: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case authActions.tokenGranted:
      console.log(action);
      return {
        ...state,
        username: action.payload.name,
        token: action.payload.token,
      };
    case authActions.logout:
      return initialState;
    default:
      return state;
  }
}
