import {marketTrans} from '../actions/actionTypes';

const initialState = {
  shopname: 'SECRET SHOP',
  cart: [],
  tax: 2,
  items: [
    {
      id: 99128,
      item_name: 'dump',
      description: 'it is visible if no item found',
      price: 999,
      vendor: 'casper',
      qty: 1,
      item_image:
        'https://www.oatey.com//ASSETS/IMAGES/ITEMS/DETAIL_PAGE/NoImage.png',
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case marketTrans.itemServed:
      return {
        ...state,
        shopname: action.payload.shopname,
        items: action.payload,
      };
    case marketTrans.fillCart:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart.find(i => i.id === action.payload.id) && action.payload,
        ],
      };
    // if (state.cart.find(i => i.id === action.payload.id)) {
    //   return state;
    // } else {
    //   return {
    //     ...state,
    //     cart: [...state.cart, action.payload],
    //   };
    // }

    case marketTrans.reset:
      return initialState;
    default:
      return state;
  }
}
