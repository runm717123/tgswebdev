import {authActions, appState} from './actionTypes';

export const actAuth = {
  tokenGranted: payload => ({
    type: authActions.tokenGranted,
    ...payload,
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
