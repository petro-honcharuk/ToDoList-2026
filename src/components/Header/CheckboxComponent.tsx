import React, { useState } from 'react';

import { Pressable, Text, View } from 'react-native';

import { createStyles, useStyles } from '../../theme/hooks/useStyles.hook';
import { ItemDate } from '../../types/types';

type Props = {
  item: ItemDate;
  onToggle: (id: number) => void;
};

export const CheckboxComponent = ({ item, onToggle }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = useStyles(stylesheet);

  const checkboxVisible = () => {
    setIsVisible(!isVisible);
    onToggle(item.id);
  };
  return (
    <View>
      <Pressable onPress={checkboxVisible} style={styles.container}>
        {item.completed && <Text style={styles.title}>L</Text>}
      </Pressable>
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: 5,
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
