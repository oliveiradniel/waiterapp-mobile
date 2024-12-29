import { useState } from 'react';

import { Modal, Platform, TouchableOpacity } from 'react-native';

import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { Button } from '../Button';

import { Form, Input, ModalBody, ModalHeader, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  const isAndroid = Platform.OS === 'android';

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal
      animationType='fade'
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
              keyboardType='number-pad'
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              value={table}
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
