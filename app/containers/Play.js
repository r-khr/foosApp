import React, { Component } from 'react';

import { 
  View,
  Button,
  Text,
  TextInput,
  Image,
  Tile,
  Title,
  Caption,
  Subtitle
} from '@shoutem/ui';


export default class Play extends Component {
  constructor(props){
    super(props);

    this.navToProfile = this.navToProfile.bind(this);
  }


  navToProfile(){
    this.props.navigator.replace({
      id: 'Profile'
    });
  }

  render() {
    return(
      <View>
        <Button styleName="dark" onPress={this.navToProfile}>
          <Text>Profile</Text>
        </Button>
      </View>
    );
  }
}