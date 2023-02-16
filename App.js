import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import Dashboard from "./src/screens/Dashboard";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen1 from "./src/screens/SquareScreen1";
import CounterScreen1 from "./src/screens/CounterScreen1";
import TextScreen from "./src/screens/TextScreen";
import LayoutScreen from "./src/screens/LayoutScreen";
import LayoutScreen1 from "./src/screens/LayoutScreen1";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Dashboard: Dashboard,
    Component: ComponentScreen,
    FlatList: FlatListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Square1: SquareScreen1,
    Counter1: CounterScreen1,
    Text: TextScreen,
    Layout: LayoutScreen,
    Layout1: LayoutScreen1
  },
  {
    initialRouteName: "Dashboard",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
