import React, { PropsWithChildren } from 'react';

import { View, Modal } from 'react-native';

import { useStyles } from '@/src/theme/hooks/useStyles.hook';

import { TitleComponent } from '.././TitleComponent';

import { stylesheet } from './modal.style';

type Props = {
  visible: boolean;
  title: string;
};

export const ModalComponent = ({
  visible,
  title,
  children,
}: PropsWithChildren<Props>) => {
  const styles = useStyles(stylesheet);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.popup}>
          <TitleComponent title={title} style={styles.title} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
