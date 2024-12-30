import React, { useState } from 'react';

import { formatCurrency } from '../../utils/formatCurrency';

import products from '../../mocks/products';

import { FlatList } from 'react-native';

import { Text } from '../Text';

import { ProductImage, ProductContainer, ProductDetails, Separator, AddToCardButton } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';

interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: { name: string; icon: string; _id: string; }[];
}

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal product={selectedProduct} visible={isModalVisible} />

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
            <AddToCardButton>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
