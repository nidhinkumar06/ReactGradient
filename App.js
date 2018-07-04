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
  Container,
  Content,
  Footer,
  FooterTab,
  Title
} from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <LinearGradient colors={['#ff6065', '#ffb265']} style={styles.container}>
        <Container>
          <Header transparent>
            <StatusBar backgroundColor="#ff6065" barStyle="light-content" />
            <Left>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <View style={styles.contentAlign}>
              <Text style={styles.contentText}>This is Content Section</Text>
              <View style={styles.buttonNormal}>
                <Button bordered light rounded>
                  <Text> Battery Setting </Text>
                </Button>
              </View>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#ff6065', '#ffb265']}
                style={styles.buttonGradient}
              >
                <Button bordered light rounded large>
                  <Text> Battery Setting </Text>
                </Button>
              </LinearGradient>
            </View>
          </Content>
        </Container>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerText: {
    color: '#FFFFFF'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGradient: {
    borderRadius: 30
  },
  buttonNormal: {
    paddingTop: 5,
    paddingBottom: 10
  },
  contentText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  contentAlign: {
    alignItems: 'center'
  }
});
