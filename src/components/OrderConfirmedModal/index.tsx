import { Modal } from 'react-native';

import { Text } from '../Text';

import { CheckCircle } from '../Icons/CheckCircle';

import { Container, OKButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal animationType="fade" visible={visible}>
      <Container>
        <CheckCircle />

        <Text color='#fff' size={20} weight={600} style={{ marginTop: 12 }}>Pedido confirmado</Text>
        <Text color='#fff' opacity={0.9} style={{ marginTop: 4 }}>O pedido já está na fila de produção!</Text>

        <OKButton onPress={onOk}>
          <Text color='#d73035' weight={600}>OK</Text>
        </OKButton>
      </Container>
    </Modal>
  );
}
