import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ListItem extends Component {
  render() {
    const placesContent = this.props.places.map((place, index) => (
      <Text key={index} style={styles.text}>
        {place}
      </Text>
    ));
    return <View style={styles.container}>{placesContent}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 5,
    backgroundColor: "green"
  },
  text: {
    fontSize: 20,
    color: "#ebebeb",
    padding: 10
  }
});
