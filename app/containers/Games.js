import React, { Component } from 'react';

import {
  Screen,
  ListView,
  Row,
  Icon,
  Text,
  Divider,
  View
} from '@shoutem/ui';

const gameData = [
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      },
      {
        player1: 'John',
        player2: 'Mark'
      }
    ];


export default class Games extends Component {
  constructor(props){
    super(props);

    this.navToProfile = this.navToProfile.bind(this);
  }


  navToProfile(){
    this.props.navigator.replace({
      id: 'Profile'
    });
  }

  loadMoreData(){
    var newArray = gameData.slice();
    gameData = gameData.concat(newArray);
  }

  renderRow(rowData) {
    return (
      <Row styleName="small">
        <Icon name="friends" />
        <Text>{rowData.player1} vs. {rowData.player2}</Text>
      </Row>
    )
  }

  render() {
    return(
      <Screen styleName="full-screen">
        <ListView
          data={gameData}
          onLoadMore={this.loadMoreData}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}

