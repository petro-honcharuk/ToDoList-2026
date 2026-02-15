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
  disabled?: boolean;
  visible?: boolean;
};

const Button = ({
  title,
  onPress,
  style,
  disabled = false,
  visible = true,
}: Prop) => {
  if (!visible) return null;
  return (
    <TouchableOpacity
      style={[styles.btn, disabled && styles.disabled, style]}
      onPress={disabled ? undefined : onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    borderRadius: 5,
    //marginVertical: 5,
    borderWidth: 2,
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  disabled: {
    opacity: 0.5,
  },
});
