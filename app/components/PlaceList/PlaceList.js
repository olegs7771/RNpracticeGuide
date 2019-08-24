import React, { Component } from "react";
import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";
import { connect } from "react-redux";

const PlaceList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem
          place={info.item.name}
          onItemSelected={() => props.onItemSelected(info.item.key)}
          image={info.item.image}
        />
      )}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 10
  }
});
const mapStateToProps = state => ({
  places: state.modal.places
});

export default connect(mapStateToProps)(PlaceList);
