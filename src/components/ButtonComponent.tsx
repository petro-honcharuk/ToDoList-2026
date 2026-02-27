import React from 'react';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { fonts } from '../theme/font';

type Props = {
  title: string;
  styleTitle?: StyleProp<TextStyle>;
  styleButton?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const ButtonComponent = ({
  title,
  styleTitle,
  styleButton,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 3,
    width: 85,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
