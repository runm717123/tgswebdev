import {authActions} from '../actions/actionTypes';

const initialState = {
  user_id: '',
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
        user_id: action.payload.id,
        username: action.payload.name,
        token: action.payload.token,
      };
    case authActions.logout:
      return initialState;
    default:
      return state;
  }
}
