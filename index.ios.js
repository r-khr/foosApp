/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Examples } from '@shoutem/ui';

export default class foosApp extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('foosApp', () => foosApp);
