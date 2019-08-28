import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/Ionicons";
export default class Counter extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Counter",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerRight: (
        <TouchableOpacity>
          <Icon name="md-add" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      )
    };
  };
  state = {
    counter: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> counter here </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 22
  }
});
