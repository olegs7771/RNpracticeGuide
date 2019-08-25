import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}> Login Page </Text>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Email.."
            style={styles.textInput}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 50,
    alignItems: "center"
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  containerTextInput: {
    paddingTop: 40,
    flexDirection: "column",
    width: "70%"
  },
  textInput: {
    borderWidth: 1,
    padding: 4,
    marginBottom: 4
  }
});
