import React from 'react';

import { Pressable, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { createStyles, useStyles } from '@/src/theme/hooks/useStyles.hook';

type Props = {
  checked: boolean;
  onPress: () => void;
};

export const CheckboxComponent = ({ checked, onPress }: Props) => {
  const styles = useStyles(stylesheet);

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, checked && styles.checkedContainer]}>
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
        {/* {item.completed && <Text style={styles.title}>L</Text>} */}
      </View>
    </Pressable>
  );
};

const stylesheet = createStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  checkedContainer: {
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 20,
    transform: [{ rotateZ: '45deg' }, { rotateY: '180deg' }],
    marginLeft: 3,
    marginBottom: 3,
    color: theme.colors.text,
  },
}));
