import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';
const { currentHeight } = StatusBar;

export const Container = styled.SafeAreaView`
  background-color: #fafafa;
  margin-top: ${isAndroid ? `${currentHeight}px` : '0'};
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  height: 73px;
  margin-top: 34px;
`;
