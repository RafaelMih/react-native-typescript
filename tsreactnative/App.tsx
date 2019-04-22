import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import { StyledView, Title, MyComponent } from './styles/theme';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <StyledView>
        <Title>Hello World!</Title>
        <Text>Teste</Text>
        <MyComponent>Cor dinâmica</MyComponent>
      </StyledView>
    );
  }
}