import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from "react-native";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    AsyncStorage.getItem("email").then(email => {
      this.setState({
        email
      });
    });
  }
  loginFormHandle = () => {
    const { email, password } = this.state;
    let loggedUser;
    if (email === "") {
      Alert.alert("Email Empty");
    } else if (password === "") {
      Alert.alert("Password Empty");
    } else {
      loggedUser = {
        email,
        password
      };
      console.log(loggedUser);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}> Login Page </Text>
        <View style={styles.containerTextInput}>
          <TextInput
            value={this.state.email}
            placeholder="Email.."
            style={styles.textInput}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button title="Login" onPress={this.loginFormHandle} />
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
