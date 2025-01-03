import { FlatList, Modal } from 'react-native';

import { Product } from '../../types/Product'
;
import { formatCurrency } from '../../utils/formatCurrency';

import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { Button } from '../Button';

import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from './styles';

interface ProductModalProps {
  product: Product | null;
  visible: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, visible, onClose, onAddToCart }: ProductModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal animationType='slide' presentationStyle='pageSheet' visible={visible} onRequestClose={onClose}>
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

        {product.ingredients.length > 0 && (
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
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight={600}>{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>

  );
}
