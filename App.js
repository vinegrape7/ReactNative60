import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src/index";

export default class App extends React.Component {
  state = {
    cities: []
  };
  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };
  addLocation = () => {};
  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
