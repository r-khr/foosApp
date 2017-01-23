import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import {Router, Route, Scene, Animations, TabBar} from 'react-native-router-flux';
import { NavigationBar, Title, Image } from '@shoutem/ui';

import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as actions from './actions/auth';
const RouterWithRedux = connect()(Router);

import Splash from './containers/splash';
import Profile from './containers/profile';

class RootRouter extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    var { state, actions } = this.props;
    var routeId = route.id;
    if (routeId === 'Splash') {
      return (
        <Profile
          {...this.props}
          navigator={navigator}
        />
      );
    }
  }
    
  render() {
    return (
      <Navigator
        style={{flex: 1, paddingTop: 70}}
        initialRoute={{id: 'Splash', name: 'Splash'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <NavigationBar
            styleName="fade"
            centerComponent={<Title>Rangle Foos</Title>}
          />
        }
      />
    );
  }
}

export default connect(state => ({
    state: state.auth
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(RootRouter);