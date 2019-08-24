import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

export class SendBox extends Component {
  state = {
    arr: [
      {
        key: "1",
        name: "one"
      },
      {
        key: "2",
        name: "two"
      },
      {
        key: "3",
        name: "three"
      },
      {
        key: "4",
        name: "four"
      }
    ]
  };
  onPressHandle = () => {
    console.log("pressed");
  };
  render() {
    const { arr } = this.state;
    const filterArr = arr.filter(item => {
      return item.key !== "3";
    });

    return (
      <View style={styles.container}>
        <FlatList
          data={filterArr}
          renderItem={info => <Text>{info.item.name}, </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDD4",
    padding: 10
  }
});

export default SendBox;
