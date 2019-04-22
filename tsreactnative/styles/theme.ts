import styled from 'styled-components'
import { Text, View } from 'react-native';
import { mainTheme } from './main-theme';

// theme is now fully typed
export const MyComponent = styled(Text)`
  color: ${props => props.theme.colors.main};
`;

export const StyledView = styled(View)`
  background-color: ${props => props.theme.bgColor.layout};
`

export const Title = styled(Text)`
  background-color: ${props => props.theme.bgColor.layout};
  color: ${props => props.theme.colors.secondary};
  textAlign: center;
  margin: 5px;
`