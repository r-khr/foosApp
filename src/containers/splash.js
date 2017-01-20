import React, { Component } from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

export default class Splash extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentDidMount(){
    // setTimeout(() => this.nav(), 3000);
  }

  nav(){
    this.props.navigator.replace({
      id: 'Dashboard'
    });
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Image source={require("../images/foos.jpg")} style={{alignSelf: "stretch"}} resizeMode="contain" />
      </View>
    );
  }
}