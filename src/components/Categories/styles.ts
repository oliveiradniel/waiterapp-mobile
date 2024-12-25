import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  align-items: center;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
  height: 44px;
  justify-content: center;
  margin-bottom: 8px;
  width: 44px;
`;
