import { Categories } from '../components/Categories';
import { Header } from '../components/Header';

import { Container, CategoriesContainer } from './styles';

export function Main() {
  return (
    <Container>
      <Header />

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
    </Container>
  );
}
