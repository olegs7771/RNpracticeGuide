import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 8,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  containerTitle: {
    marginVertical: 20
  },
  textTitle: {
    fontSize: 22
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
