import React, { Component } from 'react';

import {
  ListView,
  Row,
  Icon,
  Text,
  Divider,
  View
} from '@shoutem/ui';


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

  renderRow(rowData) {
    return (
      <View>
        <Row styleName="small">
          <Icon name="star" />
          <Text>{text}</Text>
        </Row>
        <Divider styleName="line" />
      </View>
    )
  }

  render() {
    const data = [
      'stuff',
      'stuff',
      'stuff',
      'stuff',
      'stuff',
      'stuff',
      'stuff',
    ];

    return(
      <ListView
        data={data}
        renderRow={this.renderRow}
      />
    );
  }
}