/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  Button,
  Text,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Title
} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button Transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>First App</Title>
          </Body>
          <Right>
            <Button Transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Button>
          <Text>Native base button</Text>
        </Button>
        <Text>Welcome to Codingtown!</Text>
        <Text>This is our first project</Text>
      </View>
    );
  }
}
