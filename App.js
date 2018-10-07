import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import Tabs from "./src/index";
const citieskey = "cities";

export default class App extends React.Component {
  state = {
    cities: []
  };
  async componentDidMount() {
    try {
      const cities = await AsyncStorage.getItem(citieskey);
      cities = cities === null || cities === undefined ? [] : cities;
      this.setState({
        cities: JSON.parse(cities)
      });
    } catch (e) {
      console.log(e);
    }
  }
  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
    AsyncStorage.setItem(citieskey, JSON.stringify(cities))
      .then(() => console.log("item stored"))
      .catch(error => {
        console.log(error);
      });
  };
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(d => {
      return d.id === city.id;
    });
    const selectedCity = this.state.cities[index];
    selectedCity.locations.push(location);
    const cities = [...this.state.cities.slice(0, index), selectedCity, ...this.state.cities.slice(index + 1)];
    this.setState(
      {
        cities
      },
      () => {
        AsyncStorage.setItem(citieskey, JSON.stringify(cities))
          .then(() => console.log("item stored"))
          .catch(error => {
            console.log(error);
          });
      }
    );
  };
  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
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
