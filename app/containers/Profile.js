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
  Subtitle,
  Divider
} from '@shoutem/ui';


export default class Profile extends Component {
  constructor(props){
    super(props);
    
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.navToSplash = this.navToSplash.bind(this);
  }

  updateFirstName(val) {
    this.props.actions.setUserData({
      firstName: val
    });
  }

  updateLastName(val) {
    this.props.actions.setUserData({
      lastName: val
    });
  }

  updateEmail(val) {
    this.props.actions.setUserData({
      email: val
    });
  }

  navToSplash(){
    this.props.navigator.replace({
      id: 'Splash'
    });
  }

  render() {
    var { firstName, lastName, email } = this.props.state.user;
    return(
      <View>
        <Image
          styleName="large-banner"
          source={require("../images/foos.jpg")}
        >
          <Tile>
            <Title>Your Profile</Title>
          </Tile>
        </Image>
        <View>
          <TextInput 
            placeholder={'First Name'}
            onChangeText={this.updateFirstName} 
            value={firstName}
          />
          <Divider styleName="line" />
          <TextInput 
            placeholder={'Last Name'}
            onChangeText={this.updateLastName} 
            value={lastName}
          />
          <Divider styleName="line" />
          <TextInput 
            placeholder={'Email'}
            onChangeText={this.updateEmail} 
            value={email}
          />
          <Button styleName="dark" onPress={this.navToSplash}>
            <Text>Recent Games</Text>
          </Button>
        </View>
      </View>
    );
  }
}
