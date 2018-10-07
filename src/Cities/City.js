import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import { colors } from "../theme";
import CenterMessage from "../components/CenterMessage";

export default class City extends React.Component {
  static navigationOptions = props => {
    return {
      title: props.navigation.state.params.city.city,
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "400"
      }
    };
  };
  state = {
    name: "",
    info: ""
  };
  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };
  addLocation = () => {
    if (this.state.name === "" || this.state.info === "") return;
    const city = this.props.navigation.state.params.city;
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({ name: "", info: "" });
  };
  render() {
    console.log("main city", this.props);
    const city = this.props.navigation.state.params.city;
    console.log("city obj", city);
    let locationsHtml = null;
    if (city.locations.length === 0) {
      locationsHtml = <CenterMessage message="No locations found" />;
    } else {
      locationsHtml = city.locations.map((location, index) => (
        <View style={styles.locationContainer}>
          <Text style={styles.locationName}>{location.name}</Text>
          <Text style={styles.locationInfo}>{location.info}</Text>
        </View>
      ));
    }

    return (
      <View style={styles.container}>
        {locationsHtml}
        <TextInput
          style={styles.input1}
          value={this.state.name}
          placeholder="Location Name"
          onChangeText={val => this.onChangeText("name", val)}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input2}
          value={this.state.info}
          placeholder="Location info"
          onChangeText={val => this.onChangeText("info", val)}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input1: {
    position: "absolute",
    height: 50,
    backgroundColor: colors.primary,
    width: "100%",
    bottom: 104,
    left: 0,
    color: "white"
  },
  input2: {
    position: "absolute",
    height: 50,
    backgroundColor: colors.primary,
    width: "100%",
    bottom: 52,
    left: 0
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1
  },
  locationInfo: {
    color: "rgba(0,0,0,0.5)"
  },
  locationName: {
    fontSize: 20
  }
});
