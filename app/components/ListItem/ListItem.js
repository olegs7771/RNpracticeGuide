import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.place} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#d6d6d6",
    paddingTop: 2,
    paddingBottom: 2
  },
  text: {
    fontSize: 20,
    color: "#ebebeb"
  }
});