import React from 'react';

import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
type Prop = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ title, onPress, style }: Prop) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 2,
    width: 50,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passed: {
    opacity: 0.5,
  },
});
