import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class FormGroup extends Component {
  addPlaceHandle = () => {
    this.props.addPlace();
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.props.placeName}
          onChangeText={this.props.onChangeText}
          placeholder="Fill all fields"
        />

        <Button
          title="text"
          color="#3aa7f0"
          style={styles.button}
          onPress={this.addPlaceHandle}
        />
      </View>
    );
  }
}

export default FormGroup;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderBottomWidth: 1,
    width: "70%"
  }
});
