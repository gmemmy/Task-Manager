import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Screens
import Home from '../src/screens/screen 1/index';
import TaskDisplay from '../src/screens/screen 2/index';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home
      },
      TaskDisplay: {
        screen: TaskDisplay
      },
    },
    {
      initialRoute: Home,
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  )
)

export default AppContainer;
