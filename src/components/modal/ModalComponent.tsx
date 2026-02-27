import React, { PropsWithChildren } from 'react';

import { View, Modal } from 'react-native';

import { TitleComponent } from '.././TitleComponent';

import { addModalStyle } from './modal.Style';

type Props = {
  visible: boolean;
  title: string;
};

export const ModalComponent = ({
  visible,
  title,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={addModalStyle.modal}>
        <View style={addModalStyle.POPUP}>
          <TitleComponent title={title} style={addModalStyle.text} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
