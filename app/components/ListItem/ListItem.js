import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemSelected}>
    <View style={styles.container}>
      <Image source={props.image} resizeMode="cover" style={styles.image} />
      <Text style={{ color: "white" }}>{props.place}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#c7c5bf",
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  }
});
export default ListItem;
