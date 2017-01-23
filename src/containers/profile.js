import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import { 
  Screen,
  Row,
  TextInput,
  Image,
  Tile,
  Title,
  Caption,
  Subtitle,
  Divider
} from '@shoutem/ui';


export default class Profile extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  updateFirstName(val) {
    console.log('First Name', val);
  }

  updateLastName(val) {
    console.log('Last Name', val);
  }

  updateEmail(val) {
    console.log('Email', val);
  }

  render() {
    return(
      <Screen styleName="full-screen">
        <Image
          styleName="large-banner"
          source={require("../images/foos.jpg")}
        >
          <Tile styleName="text-centric">
            <Title styleName="sm-gutter-bottom">Your Profile</Title>
          </Tile>
        </Image>
        <View>
          <TextInput 
            placeholder={'First Name'}
            onChangeText={this.updateFirstName} 
          />
          <TextInput 
            placeholder={'Last Name'}
            onChangeText={this.updateLastName} 
          />
          <TextInput 
            placeholder={'Email'}
            onChangeText={this.updateEmail} 
          />
        </View>
      </Screen>
    );
  }
}