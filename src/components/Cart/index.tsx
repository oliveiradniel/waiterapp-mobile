import { FlatList, TouchableOpacity } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';

import { CartItem } from '../../types/CartItem';

import { Text } from '../Text';

import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://192.168.18.92:3001/uploads/${cartItem.product.imagePath}`
              }}
            />

            <QuantityContainer>
              <Text color='#666' size={14}>{cartItem.quantity}</Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight={600}>{cartItem.product.name}</Text>
              <Text color='#666' size={14} style={{
                margiTop: 4
              }}>{formatCurrency(cartItem.product.price)}</Text>
            </ProductDetails>
          </ProductContainer>

          <Actions>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
