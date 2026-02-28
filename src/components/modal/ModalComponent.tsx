import React, { PropsWithChildren } from 'react';

import { View, Modal } from 'react-native';

import { useTheme } from '@/src/theme/ThemeContext';

import { TitleComponent } from '.././TitleComponent';

import { createStyles } from './modal.Style';

type Props = {
  visible: boolean;
  title: string;
};

export const ModalComponent = ({
  visible,
  title,
  children,
}: PropsWithChildren<Props>) => {
  const { colors } = useTheme();
  const modalStyle = createStyles(colors);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={modalStyle.modal}>
        <View style={modalStyle.POPUP}>
          <TitleComponent title={title} style={modalStyle.text} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
