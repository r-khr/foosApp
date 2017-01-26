import React, { Component } from 'react';
import { Navigator } from 'react-native';

import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as actions from './actions/user';

import Games from './containers/Games';
import Profile from './containers/Profile';

class RootRouter extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    var { state, actions } = this.props;
    if (route.id === 'Foos') {
      return (<Games {...this.props} navigator={navigator} />);
    }
    else if (route.id === 'Profile') {
      return (<Profile {...this.props} navigator={navigator} />);
    }
    else if (route.id === 'Games') {
      return (<Games {...this.props} navigator={navigator} />);
    }
  }

  nav(urlId){
    this.navigator.replace({
      id: urlId
    });
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'Profile', name: 'Profile'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

export default connect(state => ({
    state: state.default
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(RootRouter);