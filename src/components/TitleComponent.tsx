import React from 'react';

import { StyleProp, Text, TextStyle, View } from 'react-native';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

export const TitleComponent = ({ title, style }: Props) => {
  const styles = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
}));
