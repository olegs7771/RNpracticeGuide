import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "red",
    paddingTop: 20,
    paddingBottom: 40
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
});
