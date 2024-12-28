import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  justify-content: center;
  padding: 24px;
`;

export const ModalBody = styled.View`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 24px;
`;

export const ModalHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 16px;
`;
