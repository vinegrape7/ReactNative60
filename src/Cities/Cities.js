import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Cities extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Hello from Cities</Text>
      </View>
    );
  }
}
