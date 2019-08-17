import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from "./app/components/ListItem/ListItem";

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
    console.log("this.state.places", this.state.places);
  };

  render() {
    const placesContent = this.state.places.map((place, index) => (
      <ListItem key={index} place={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.formGroupContainer}>
          <TextInput
            style={styles.textInput}
            value={this.state.placeName.name}
            onChangeText={text => this.setState({ placeName: text })}
            placeholder="Fill all fields"
          />
          <Button
            title="text"
            color="#3aa7f0"
            style={styles.button}
            onPress={this.buttonHandle}
          />
        </View>
        <View style={styles.listItem}>{placesContent}</View>
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
  },
  textInput: {
    borderColor: "black",
    borderBottomWidth: 1,
    width: "60%"
  },
  formGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  },
  listItem: {
    width: "100%",
    backgroundColor: "#e4ebf0"
  }
});
