import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class App extends Component {
  state = {
    placeName: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.placeName.name}
          onChangeText={text => this.setState({ placeName: text })}
          placeholder="fill all fields"
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
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "60%",

    paddingLeft: 60
  }
});
