import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  const placesContent = props.places.map((place, index) => (
    <ListItem key={index} place={place} />
  ));

  return <View style={styles.container}>{placesContent}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 10
  }
});
export default PlaceList;
