import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./header/Header";
import Main from "./main/Main";

export class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35
  }
});
export default Home;
