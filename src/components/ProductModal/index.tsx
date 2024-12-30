import { FlatList, Modal } from 'react-native';

import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  product: {
    _id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: { name: string; icon: string; _id: string; }[];
  } | null;
  visible: boolean;
  onClose: () => void;
}

export function ProductModal({ product, visible, onClose }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal animationType='slide' visible={visible}>
      <Image
        source={{
          uri: `http://192.168.18.92:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight={600}>{product.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        <IngredientsContainer>
          <Text color='#666' weight={600}>Ingredientes</Text>

          <FlatList
            data={product.ingredients}
            keyExtractor={ingredients => ingredients._id}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 16 }}
            renderItem={({ item: ingredient }) => (
              <Ingredient>
                <Text>{ingredient.icon}</Text>
                <Text color='#666' size={14}>{ingredient.name}</Text>
              </Ingredient>
            )}
          />
        </IngredientsContainer>
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight={600}>{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={() => alert('Adicionar')}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>

  );
}
