import React from 'react';

import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

import { fonts } from '../theme/font';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

export const TitleComponent = ({ title, style }: Props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style, { color: colors.text }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.bold,
  },
});
