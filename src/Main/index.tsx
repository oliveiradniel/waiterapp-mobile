import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';

import { Container, CategoriesContainer, Footer, FooterContainer } from './styles';

export function Main() {
  return (
    <Container>
      <Header />

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>

      <Footer>
        <FooterContainer>
          <Button disabled onPress={() => alert('onPress')}>Novo pedido</Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
}
