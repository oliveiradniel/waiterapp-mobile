import { Modal, Platform, TouchableOpacity } from 'react-native';

import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { Button } from '../Button';

import { Form, Input, ModalBody, ModalHeader, Overlay } from './styles';

export function TableModal() {
  const isAndroid = Platform.OS === 'android';

  return (
    <Modal
      transparent
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'} >
        <ModalBody>
          <ModalHeader>
            <Text weight={600}>Informe a mesa</Text>

            <TouchableOpacity>
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
