import React, { PropsWithChildren } from 'react';

import { View, Modal, Text } from 'react-native';

import { useStyles } from '@/src/theme/hooks/useStyles.hook';

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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};
