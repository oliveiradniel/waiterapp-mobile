import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  align-items: flex-end;
  height: 200px;
  width: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  height: 32px;
  justify-content: center;
  margin: 24px;
  width: 32px;
`;

export const ModalBody = styled.View`
  background-color: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  `;

export const Ingredient = styled.View`
  align-items: center;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 4px;
  padding: 16px;
`;

export const Footer = styled.View`
  background-color: #fff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
`;
