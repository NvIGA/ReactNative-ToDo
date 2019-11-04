import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ToDoScreen } from './screens'
import { HOME_SCREEN ,TODO_SCREEN } from './routes'

const AppNavigator = createStackNavigator({
  HOME_SCREEN: {
    screen: HomeScreen,
  },
  TODO_SCREEN: {
    screen: ToDoScreen
  }
}, {
  initialRouteName: HOME_SCREEN,
  defaultNavigationOptions: {
    
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }});

export default createAppContainer(AppNavigator);