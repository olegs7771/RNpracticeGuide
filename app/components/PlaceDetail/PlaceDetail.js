import React from "react";
import { View, Text, Modal, Image, Button } from "react-native";

const PlaceDetail = props => {
  let modalContent;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} />
        <Text>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null}>
      {modalContent}
      <View>
        <Button title="Close" />
        <Button title="Delete" />
      </View>
    </Modal>
  );
};

export default PlaceDetail;
