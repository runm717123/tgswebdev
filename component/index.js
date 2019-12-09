import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ShopLogin from './form/ShopLoginPage';
import ShopRegister from './form/ShopRegisterPage';
import Stage from './DisplayPage';
import CartPage from './CartPage.';
import ItemDetail from './ItemDetailPage';
import Checkout from './CheckoutPage';
import ExperimentPage from './Experiment';

const AuthStack = createBottomTabNavigator(
  {
    Login: ShopLogin,
    Register: ShopRegister,
  },
  {
    tabBarOptions: {
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      labelStyle: {
        fontSize: 20,
        marginBottom: 10,
      },
    },
  },
);

AuthStack.navigationOptions = {
  headerShown: false,
};

const MainStack = createStackNavigator(
  {
    Stage: Stage,
    Detail: ItemDetail,
    Checkout: Checkout,
    Experiment: ExperimentPage,
  },
  {
    // initialRouteName: 'Experiment',
    initialRouteName: 'Stage',
  },
);

const ShopBottomNav = createBottomTabNavigator(
  {
    Main: MainStack,
    Cart: CartPage,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 20,
        marginBottom: 10,
      },
      showIcon: false,
    },
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const AppNavigator = createSwitchNavigator({
  Begin: AuthStack,
  Shop: ShopBottomNav,
});
export default createAppContainer(AppNavigator);
