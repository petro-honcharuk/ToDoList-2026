import React from 'react';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

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
    //fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 3,
    width: 85,
    height: 38,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
