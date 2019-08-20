import React from "react";
import { View, Text, Modal, Image, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.image} />
        <Text>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}

        <View style={styles.buttons}>
          <Button title="Close" />
          <Button title="Delete" color="red" />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 200
  }
});

export default PlaceDetail;
