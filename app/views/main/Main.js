import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Main </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 5,
    paddingTop: 20,
    paddingBottom: 40
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});
