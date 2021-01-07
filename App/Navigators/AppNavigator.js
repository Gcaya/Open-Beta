import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainMenuScreen from 'App/Containers/MainMenu/MainMenuScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import CameraScreen from 'App/Containers/CameraScreen/CameraScreen'
import ProblemSolverScreen from 'App/Containers/ProblemSolver/ProblemSolverScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

//const Stack = createStackNavigator();

const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    MainScreen: MainMenuScreen,
    CameraScreen: CameraScreen,
    ProblemSolverScreen: ProblemSolverScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)
