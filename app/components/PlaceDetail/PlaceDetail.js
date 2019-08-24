import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

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
          <TouchableOpacity style={styles.button} onPress={props.onModalClosed}>
            <Ionicons
              name="ios-trash"
              size={25}
              color="green"
              onPress={this.onPressHandle}
              style={styles.icon}
            />
          </TouchableOpacity>
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
  button: {
    backgroundColor: "yellow",
    width: 70,
    height: 40,
    padding: 5,
    marginRight: 5
  },
  icon: {
    textAlign: "center"
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
const mapStateToProps = state => ({
  selectedPlace: state.modal.selectedPlace
});

export default connect(mapStateToProps)(PlaceDetail);
