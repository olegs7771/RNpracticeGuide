import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./app/components/Home/Home";
import Login from './app/Auth/Login';
import Signup from './app/Auth/Signup';


import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator=createStackNavigator({
  HomeRT:{
screen:Home
  },
  LoginRT:{
    screen:Login
  },
  SignupRT:{
    screen:Signup
  },
  
  
},
{
  initialRouteName:'HomeRT'
})
let Navigation=createAppContainer(AppNavigator)

 export default  class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
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


