import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemSelected}>
    <View style={styles.container}>
      <Image source={props.image} resizeMode="cover" style={styles.image} />
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5
  },
  image: {
    width: "100%",
    height: 200,
    marginRight: 10
  }
});
export default ListItem;
