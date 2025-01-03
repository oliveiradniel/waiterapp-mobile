import React from 'react';

import { FlatList, TouchableOpacity } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';

import { CartItem } from '../../types/CartItem';

import { Text } from '../Text';

import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Sumary, TotalContainer } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
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
      )}

      <Sumary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight={600}>{formatCurrency(120)}</Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button disabled={cartItems.length === 0} onPress={() => alert('confirmar pedido')}>Confirmar pedido</Button>
      </Sumary>
    </>
  );
}
