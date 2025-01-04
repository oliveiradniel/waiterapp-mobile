import { ActivityIndicator } from 'react-native';

import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export function Button({ children, disabled, loading, onPress }: ButtonProps) {
  return (
    <Container disabled={disabled || loading} onPress={onPress}>
      {!loading && (
        <Text color='#fff' weight={600}>{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color='#fff' />
      )}
    </Container>
  );
}
