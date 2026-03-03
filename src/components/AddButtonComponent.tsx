import React from 'react';

import { Pressable, View, Text } from 'react-native';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

type Props = {
  onAdd: () => void;
};

export const AddButtonComponent = ({ onAdd }: Props) => {
  const styles = useStyles(stylesheet);
  return (
    <Pressable style={styles.container} onPress={onAdd}>
      <View style={styles.addButton}>
        <Text style={styles.title}>+</Text>
      </View>
    </Pressable>
  );
};

const stylesheet = createStyles((theme) => ({
  container: {
    position: 'absolute',
    right: 50,
    bottom: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  addButton: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: theme.colors.borderColorButton,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 60,
    color: theme.colors.textButtonAdd,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
  },
}));
