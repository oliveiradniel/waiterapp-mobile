import styled from 'styled-components';

import { Text as RNText } from 'react-native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled(RNText)<TextProps>`
  font-family: ${({ weight }) => weight ? `GeneralSans-${weight}` : 'General-Sans-400'};
  color: ${({ color }) => color || '#333'};
  size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
