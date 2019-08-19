import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import FormGroup from "./app/components/FormGroup/FormGroup";
import PlaceList from "./app/components/PlaceList/PlaceList";

class App extends Component {
  state = {
    placeName: "",
    places: []
  };
  buttonHandle = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      };
    });
  };

  render() {
    console.log("this.state.placeNamaqe", this.state.placeName);

    return (
      <View style={styles.container}>
        <FormGroup
          buttonEvent={this.buttonHandle}
          onChangeText={text => this.setState({ placeName: text })}
        />

        <PlaceList places={this.state.places} />
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#dae8e8"
  }
});
