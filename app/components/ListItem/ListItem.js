import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = props => (
  <View style={styles.container}>
    <Text style={{ color: "white" }}>{props.place}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#c7c5bf"
  }
});
export default ListItem;
