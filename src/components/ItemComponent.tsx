import React from 'react';

import { View, Text } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//import { Checkbox } from 'expo-checkbox';

import { CheckboxComponent } from '@/src/components/CheckboxComponent';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';
import { ItemDate } from '../types/types';

type Props = {
  item: ItemDate;
  onToggle: (id: number) => void;
  onDelete: () => void;
  onEdit: () => void;
};
export const ItemComponent = ({ item, onDelete, onEdit, onToggle }: Props) => {
  const styles = useStyles(stylesheet);
  const onPressCheckbox = () => {
    onToggle(item.id);
  };
  return (
    <View style={styles.note}>
      {/* <Checkbox
        value={item.completed}
        onValueChange={() => {
          onToggle(item.id);
        }}
        style={styles.checkBox}
        color={'#6C63FF'}
      /> */}
      <CheckboxComponent onPress={onPressCheckbox} checked={item.completed} />

      <Text style={styles.noteText}>{item.title}</Text>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="delete"
          size={18}
          color="#CDCDCD"
          style={styles.icon}
          onPress={onDelete}
        />
        <MaterialIcons
          name="edit"
          size={18}
          color="#CDCDCD"
          style={styles.icon}
          onPress={onEdit}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: theme.colors.borderColor,
  },
  noteText: {
    flex: 1,
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    padding: 20,
    color: theme.colors.text,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 8,
    padding: 5,
  },
  checkBox: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.colors.borderColor,
  },
}));
