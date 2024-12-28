import styled from 'styled-components/native';

export const Product = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  border-radius: 12px;
  height: 96px;
  width: 120px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Separator = styled.View`
  background-color: rgba(204, 204, 204, 0.3);
  height: 1px;
  margin: 24px 0;
  width: 100%;
`;

export const AddToCardButton = styled.TouchableOpacity`
  bottom: 0;
  position: absolute;
  right: 0;
`;
