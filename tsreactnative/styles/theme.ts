import styled, { createGlobalStyle, css } from 'styled-components';
import { Text, View } from 'react-native';
import { mainTheme } from './main-theme';

// theme is now fully typed
export const MyComponent = styled(Text)`
  color: ${props => mainTheme.colors.main};
`;

export const StyledView = styled(View)`
  background-color: papayawhip;
`

export const Title = styled(Text)`
  background-color: black;
  color: #fff
`