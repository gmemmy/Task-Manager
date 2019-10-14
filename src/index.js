import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Screens
import Home from './screens/screen1/index';
import TaskDisplay from './screens/screen2/index';

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
