export const authActions = {
  getToken: 'AUTH_GET_TOKEN',
  tokenGranted: 'AUTH_DO_LOGIN',
  logout: 'AUTH_DO_LOGOUT',
  doRegister: 'AUTH_DO_REGISTER',
};

export const appState = {
  requesting: 'PAGE_IS_LOADING',
  forceLoaded: 'PAGE_LOADED',
  requestFailed: 'REQUEST_FAILED',
};

export const marketTrans = {
  itemServed: 'MARKET_ITEM_SERVED',
  getItems: 'MARKET_GET_ITEM',
  reset: 'MARKET_ITEM_ROLLBACK',
  fillCart: 'MARKET_FILL_CART',
};
