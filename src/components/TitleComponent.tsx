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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    //borderWidth: 2,
  },
});
