import Accueil from '../screens/content/accueil';
import Categories from '../screens/content/categories';
import Magasins from '../screens/content/magasins';
import Notifications from '../screens/content/notifications';
import {createDrawerNavigator} from 'react-navigation';

const DrawerNavigation = createDrawerNavigator(
  {
    Accueil: Accueil,
    Categories: Categories,
    Magasins: Magasins,
    Notifications: Notifications,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  },
);
export default DrawerNavigation;
