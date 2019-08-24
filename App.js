import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SendBox from "./SendBox";
import Home from "./app/components/Home/Home";
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
          <SendBox />
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

export default App;
