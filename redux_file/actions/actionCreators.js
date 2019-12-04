import {authActions, appState} from './actionTypes';

export const actAuth = {
  tokenGranted: payload => ({
    type: authActions.tokenGranted,
    ...payload,
  }),
  getToken: payload => ({
    type: authActions.getToken,
    payload: {
      username: payload[0],
      password: payload[1],
    },
  }),
};

export const actState = {
  requesting: payload => ({
    type: appState.requesting,
  }),

  forceLoaded: () => ({
    type: appState.forceLoaded,
  }),
};
