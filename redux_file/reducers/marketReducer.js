import {marketTrans} from '../actions/actionTypes';

const initialState = {
  shopname: 'SECRET SHOP',
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
      console.log(action, 'itemServed');
      return {
        shopname: action.payload.shopname,
        items: action.payload.map(i => ({
          id: i.id,
          item_name: i.item_name,
          description: i.description,
          price: i.price,
          vendor: i.vendor,
          qty: i.qty,
          item_image: i.item_image,
        })),
      };
    case marketTrans.reset:
      return initialState;
    default:
      return state;
  }
}
