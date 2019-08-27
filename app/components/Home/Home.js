import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import FormGroup from "../FormGroup/FormGroup";
import PlaceList from "../PlaceList/PlaceList";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

import {
  addPlace,
  selectPlace,
  closePlace,
  deletePlace
} from "../../../action/modalAction";

export class Home extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    placeName: {},
    places: [],
    selectedPlace: null
  };

  addPlaceHandle = () => {
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
    this.props.onAddPlace(newPlace);
  };
  selectItemHandle = key => {
    this.props.onSelectPlace(key);
  };
  onModalClosedHandle = () => {
    this.props.onClosePlace();
    console.log("closed");
    // this.setState({
    //   selectedPlace: null
    // });
  };
  onItemDeletedHandle = () => {
    this.props.onDeletePlace();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Welcome To Awesome App</Text>
        </View>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onModalClosed={this.onModalClosedHandle}
          onItemDeleted={this.onItemDeletedHandle}
          navigate={this.props.navigation.navigate}
        />
        <FormGroup
          addPlace={this.addPlaceHandle}
          onChangeText={text => this.setState({ placeName: text })}
        />

        <PlaceList
          // places={this.state.places}
          onItemSelected={this.selectItemHandle}
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigate("DashboardRT")}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={() => navigate("SignupRT")}
          >
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 6,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 45,
    paddingBottom: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
  containerTitle: {
    marginVertical: 20
  },
  textTitle: {
    fontSize: 22
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonLogin: {
    alignItems: "center",
    paddingTop: 5,
    marginRight: 10,
    height: 30,
    width: 60,
    backgroundColor: "#a7cfeb"
  },
  buttonSignup: {
    alignItems: "center",
    paddingTop: 5,
    height: 30,
    width: 60,
    backgroundColor: "#839feb"
  }
});

const mapStateToProps = state => ({
  selectedPlace: state.modal.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: newPlace => dispatch(addPlace(newPlace)),
  onSelectPlace: key => dispatch(selectPlace(key)),
  onClosePlace: () => dispatch(closePlace()),
  onDeletePlace: () => dispatch(deletePlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
