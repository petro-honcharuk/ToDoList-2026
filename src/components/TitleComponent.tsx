import React from 'react';

import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

export const TitleComponent = ({ title, style }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
});
