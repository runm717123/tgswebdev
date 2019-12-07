import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ShopLogin from './form/ShopLoginPage';
import ShopRegister from './form/ShopRegisterPage';
import Stage from './DisplayPage';
import ItemDetail from './ItemDetailPage';
import Checkout from './CheckoutPage';
import ExperimentPage from './Experiment';

const Start = createStackNavigator(
  {
    Login: ShopLogin,
    Register: ShopRegister,
    Stage: Stage,
    Detail: ItemDetail,
    Checkout: Checkout,
    Experiment: ExperimentPage,
  },
  {
    // headerMode: 'none',
    // initialRouteName: 'Experiment',
    initialRouteName: 'Login',
  },
);

export default createAppContainer(Start);
