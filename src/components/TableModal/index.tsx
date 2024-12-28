import { Modal, Platform, TouchableOpacity } from 'react-native';

import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { Button } from '../Button';

import { Form, Input, ModalBody, ModalHeader, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
}

export function TableModal({ onClose, visible }: TableModalProps) {
  const isAndroid = Platform.OS === 'android';

  return (
    <Modal
      transparent
      visible={visible}
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'} >
        <ModalBody>
          <ModalHeader>
            <Text weight={600}>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>
          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
            />

            <Button onPress={() => alert('Salvou')}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
