import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Button,
  AsyncStorage
} from "react-native";

export default class Signup extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password1: "",
    password2: ""
  };

  signupFormHandle = () => {
    const { email, password1, password2 } = this.state;
    let newUser;
    if (email === "") {
      Alert.alert("Email Empty");
    } else if (password1 === "") {
      Alert.alert("Password Empty");
    } else if (password1 !== password2) {
      Alert.alert("Passwords not matched");
    } else {
      newUser = {
        email,
        password2
      };
      console.log("newUser", newUser);
      AsyncStorage.setItem("email", email);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}> SignUp Here </Text>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Email.."
            style={styles.textInput}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            placeholder="new password"
            style={styles.textInput}
            onChangeText={text => this.setState({ password1: text })}
          />
          <TextInput
            placeholder="confirm password"
            style={styles.textInput}
            onChangeText={text => this.setState({ password2: text })}
          />
          <Button title="Signup" onPress={this.signupFormHandle} />
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
