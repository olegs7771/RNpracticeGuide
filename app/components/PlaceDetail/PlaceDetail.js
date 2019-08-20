import React from "react";
import { View, Text, Modal, Image, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.image} />
        <Text style={styles.text}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}

        <View style={styles.buttons}>
          <Button title="Close" onPress={props.onModalClosed} />
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 200
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  }
});

export default PlaceDetail;
