import { formatCurrency } from '../../utils/formatCurrency';

import products from '../../mocks/products';

import { FlatList } from 'react-native';

import { Text } from '../Text';

import { ProductImage, Product, ProductDetails, Separator } from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      keyExtractor={product => product._id}
      style={{ marginTop: 32 }}
      renderItem={({ item: product }) => (
        <Product>
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
        </Product>
      )}
    />
  );
}
