import {authActions, appState, marketTrans} from './actionTypes';

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
  requesting: () => ({
    type: appState.requesting,
  }),

  forceLoaded: () => ({
    type: appState.forceLoaded,
  }),
};

export const actMarket = {
  getItems: payload => ({
    type: marketTrans.getItems,
    payload: {
      token: payload[0],
      segment: payload[1],
    },
  }),
};
