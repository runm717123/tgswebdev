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
  register: payload => ({
    type: authActions.doRegister,
    payload: {
      body: {
        name: payload[0],
        email: payload[1],
        password: payload[2],
        isOwner: payload[3],
      },
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
  fillCart: payload => ({
    type: marketTrans.fillCart,
    payload: payload,
  }),

  sendCheckout: payload => ({
    type: marketTrans.sendCheckout,
    payload: {
      token: payload.token,
      body: {
        user_id: payload.user_id,
        amount: payload.amount,
        items: payload.items.map(i => ({
          item_id: i.id,
          qty: i.qty,
        })),
      },
    },
  }),
};
