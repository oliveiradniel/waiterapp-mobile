import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Text color='#fff' weight={600}>{children}</Text>
    </Container>
  );
}
