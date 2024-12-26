import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ disabled }: { disabled: boolean }) => disabled ? '#999' : '#d73035'};
  border-radius: 48px;
  justify-content: center;
  padding: 14px 24px;
`;
