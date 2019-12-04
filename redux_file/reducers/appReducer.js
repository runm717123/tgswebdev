import {appState} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case appState.requesting:
      return {
        isLoading: true,
      };
    case appState.forceLoaded:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}
