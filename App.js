import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import FormGroup from "./app/components/FormGroup/FormGroup";
import PlaceList from "./app/components/PlaceList/PlaceList";
import placeImage from "./assets/picture1.jpg";

class App extends Component {
  state = {
    placeName: {},
    places: []
  };
  buttonHandle = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    const newPlace = {
      key: JSON.stringify(Math.random()),
      name: this.state.placeName,
      image: placeImage
    };

    this.setState(prevState => {
      return {
        places: prevState.places.concat(newPlace)
      };
    });
  };
  deleteItemHandle = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  render() {
    console.log("this.state.places", this.state.places);

    return (
      <View style={styles.container}>
        <FormGroup
          buttonEvent={this.buttonHandle}
          onChangeText={text => this.setState({ placeName: text })}
        />

        <PlaceList
          places={this.state.places}
          deleteItem={this.deleteItemHandle}
        />
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
