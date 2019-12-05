import {appState} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  message: '',
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case appState.requesting:
      return {
        ...state,
        isLoading: true,
      };
    case appState.forceLoaded:
      return {
        ...state,
        isLoading: false,
      };
    case appState.requestFailed:
      return {
        isLoading: action.payload.loading,
        message: action.payload.message,
        error: true,
      };
    default:
      return state;
  }
}
