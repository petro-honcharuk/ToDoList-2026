import React from 'react';

import { View, Text } from 'react-native';

//import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Checkbox } from 'expo-checkbox';

import { createStyles } from '../screens/index.Styles';
import { useTheme } from '../theme/ThemeContext';
import { ItemDate } from '../types/types';

type Props = {
  item: ItemDate;
  onToggle: (id: number) => void;
  onDelete: () => void;
  onEdit: () => void;
};
export const ItemComponent = ({ item, onDelete, onEdit, onToggle }: Props) => {
  const { colors } = useTheme();
  const indexStyles = createStyles(colors);
  return (
    <View style={indexStyles.NOTE}>
      {/* <Pressable>
        <View style={indexStyles.checkBox}></View>
      </Pressable> */}
      <Checkbox
        value={item.completted}
        onValueChange={() => {
          onToggle(item.id);
        }}
        style={indexStyles.checkBox}
        color={'#6C63FF'}
      />

      <Text style={indexStyles.noteText}>{item.title}</Text>
      <View style={indexStyles.iconContainer}>
        <MaterialIcons
          name="delete"
          size={18}
          color="#CDCDCD"
          style={indexStyles.icon}
          onPress={onDelete}
        />
        <MaterialIcons
          name="edit"
          size={18}
          color="#CDCDCD"
          style={indexStyles.icon}
          onPress={onEdit}
        />
      </View>
    </View>
  );
};
