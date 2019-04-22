import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { StyledView, Title, MyComponent } from './styles/theme';
import { mainTheme } from './styles/main-theme';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const theme = mainTheme;

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <StyledView>
        <Title>Hello World!</Title>
        <Text>Teste</Text>
        <MyComponent>Cor dinâmica</MyComponent>
      </StyledView>
      </ThemeProvider>
    );
  }
}