import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';
const { currentHeight } = StatusBar;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${currentHeight}px` : '0'};
`;
