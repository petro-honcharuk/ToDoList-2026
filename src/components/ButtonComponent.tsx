import React from 'react';

import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

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
  const styles = useStyles(stylesheet);
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyles((theme) => ({
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    color: '#F7F7F7',
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
}));
