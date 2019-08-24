import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
  state = {
    placeName: {},
    places: [],
    selectedPlace: null
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.places !== this.state.places) {
  //     //dispatch action
  //     this.props.addPlace(this.state.places);
  //   }
  // }

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
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });

    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
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
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onModalClosed={this.onModalClosedHandle}
          onItemDeleted={this.onItemDeletedHandle}
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
    justifyContent: "flex-start",
    alignItems: "center"
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
