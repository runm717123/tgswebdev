// import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {connect} from 'react-redux';
// import {acLogin} from '../src/redux/actions';
import ShopLogin from './form/ShopLogin';
import ShopRegister from './form/ShopRegister';
import Stage from './DisplayPage';
import ItemDetail from './ItemDetail';
// import ShopDashboard from './ShopDashB';
// import DocList from './DocList';

const Start = createStackNavigator(
  {
    // Dashboard: ShopDashboard,
    // Login: ShopLogin,
    // Document: DocList,
    Login: ShopLogin,
    Register: ShopRegister,
    Stage: Stage,
    Detail: ItemDetail,
  },
  {
    // headerMode: 'none',
    // initialRouteName: 'ExperimentPage',
    initialRouteName: 'Detail',
  },
);

export default createAppContainer(Start);
