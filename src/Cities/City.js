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
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Hello from City</Text>
      </View>
    );
  }
}
