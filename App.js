import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Home from "./app/components/Home/Home";
import Login from "./app/Auth/Login";
import Signup from "./app/Auth/Signup";
import Counter from "./app/views/Counter";
import DashBoard from "./app/views/DashBoard";

import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

//Configure AppSwitchNavigator
// --WelcomeScreen
//      -- Login Button
//      -- Sign Up Button
//   --AppDrawerNavigator
//      -- DashBoard - DashBoardStackNavigator(need for header and to change the header based on the tab)
//  --DashBoardTabNavigator
//   -- Tab 1 - Feedback
//   -- Tab 2 - ProfileStack
//   -- Tab 3 - Settings Stack
//              -- Any other files (not in stack navigator)
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  FlatList
} from "react-navigation";

// Create DashboardTabNavigator
const DashBoardTabNavigator = createBottomTabNavigator(
  {
    Login,
    Home,
    Signup
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: "#fcba03"
        },
        headerTintColor: "#fff"
      };
    }
  }
);
// Create Drawnavigator for DashBord
//WrapUp all Stacks

const DashBoardStackNavigator = createStackNavigator(
  {
    DashBoardTabNavigator: DashBoardTabNavigator,
    CounterRT: {
      screen: Counter
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="md-add-circle"
            color="#fff"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#fcba03"
        }
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  DashboardRT: {
    screen: DashBoardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeRT: {
    screen: Home
  },
  DashboardRT: {
    screen: AppDrawerNavigator
  }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
