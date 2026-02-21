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
    fontSize: 10,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    width: 70,
    height: 40,
    margin: 5,
    alignItems: 'center',
  },
});
