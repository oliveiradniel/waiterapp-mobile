import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';

import { Container, CategoriesContainer, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          <Button onPress={() => setIsTableModalVisible(true)}>Novo pedido</Button>
        </FooterContainer>
      </Footer>

      <TableModal
        onClose={() => setIsTableModalVisible(false)}
        visible={isTableModalVisible}
      />
    </>
  );
}
