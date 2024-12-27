import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';
const { currentHeight } = StatusBar;

export const Container = styled.SafeAreaView`
  background-color: #fafafa;
  flex: 1;
  margin-top: ${isAndroid ? `${currentHeight}px` : '0'};
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  background-color: #fff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`

`;
