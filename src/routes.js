import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RoomsList from './pages/RoomsList';
import Room from './pages/Room';

export default createAppContainer(
  createStackNavigator(
    { RoomsList, Room },
    {
      defaultNavigationOptions: {
        headerTintColor: '#555',
        headerTitleAlign: 'center'
      }
    }
  )
);
