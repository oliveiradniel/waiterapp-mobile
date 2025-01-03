import React, { useState } from 'react';

import { formatCurrency } from '../../utils/formatCurrency';

import products from '../../mocks/products';

import { FlatList } from 'react-native';

import { Text } from '../Text';

import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Product } from '../../types/Product';

import { ProductImage, ProductContainer, ProductDetails, Separator, AddToCardButton } from './styles';

interface MenuProps {
  // eslint-disable-next-line no-unused-vars
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedProduct(null);
  }

  return (
    <>
      <ProductModal
        product={selectedProduct}
        visible={isModalVisible}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        keyExtractor={product => product._id}
        style={{ marginTop: 32 }}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage source={{
              uri: `http://192.168.18.92:3001/uploads/${product.imagePath}`
            }} />
            <ProductDetails>
              <Text weight={600}>{product.name}</Text>
              <Text size={14} color='#666'
                style={{
                  marginVertical: 8,
                }}
              >
                {product.description}
              </Text>
              <Text color='#333' size={14} weigth={600}>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
