import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from "./app/components/ListItem/ListItem";
import FormGroup from "./app/components/FormGroup/FormGroup";

class App extends Component {
  state = {
    placeName: "",
    places: []
  };
  buttonHandle = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    console.log("event");
    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      };
    });
    console.log("this.state.places", this.state.places);
  };

  render() {
    const FormGroupContent = (
      <FormGroup
        placeName={this.state.placeName}
        onChangeText={text =>
          this.setState({
            placeName: text
          })
        }
        buttonEvent={this.buttonHandle}
      />
    );
    const placesContent = this.state.places.map((place, index) => (
      <ListItem key={index} place={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.FormGroup}>{FormGroupContent}</View>
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
    backgroundColor: "#e3e1e1"
  },
  FormGroup: {
    width: "80%"
  },

  listItem: {
    width: "83%"
  }
});
