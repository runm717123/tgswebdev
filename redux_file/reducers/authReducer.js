import {authActions} from '../actions/actionTypes';

const initialState = {
  username: '',
  token: '',
  shopname: '',
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
        shopname:
          action.payload.shopname === undefined
            ? 'SECRET SHOP'
            : action.payload.shopname,
      };
    case authActions.logout:
      return initialState;
    default:
      return state;
  }
}
