import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Subscription from '../screens/subscripton';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        title: 'Rakuten',
      }),
    },
    Subscription: {
      screen: Subscription,
      navigationOptions: ({navigation}) => ({
        title: 'Rakuten',
      }),
    },
    Contenu: {
      screen: DrawerNavigation,
    },
  },
  {
    //headerMode: 'none',
    initialRouteName: 'Welcome',
  },
);
