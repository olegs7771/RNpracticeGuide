import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import FormGroup from "./app/components/FormGroup/FormGroup";
import PlaceList from "./app/components/PlaceList/PlaceList";
import PlaceDetail from "./app/components/PlaceDetail/PlaceDetail";

class App extends Component {
  state = {
    placeName: {},
    places: [],
    selectedPlace: null
  };
  buttonHandle = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    const newPlace = {
      key: JSON.stringify(Math.random()),
      name: this.state.placeName,
      image: {
        uri:
          "https://e3.365dm.com/19/08/1600x900/skynews-donald-trump-greenland_4746839.jpg?bypass-service-worker&20190816093103"
      }
    };

    this.setState(prevState => {
      return {
        places: prevState.places.concat(newPlace)
      };
    });
  };
  selectItemHandle = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });

    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  render() {
    console.log("this.state. selectedPlace", this.state.selectedPlace);

    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} />
        <FormGroup
          buttonEvent={this.buttonHandle}
          onChangeText={text => this.setState({ placeName: text })}
        />

        <PlaceList
          places={this.state.places}
          onItemSelected={this.selectItemHandle}
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
    alignItems: "center"
  }
});
