/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Map from "./Components/MapShow.js";
import Pos from "./Components/getCurrentlocation.js";

export default class Mapping extends Component {
  render() {
    return (
      <Pos />
    );
  }
}

AppRegistry.registerComponent('Mapping', () => Mapping);
