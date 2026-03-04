import React from 'react';

import { TextInput, View, Platform } from 'react-native';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

type Props = {
  value: string | any;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

export const InputComponent = ({ value, placeholder, onChangeText }: Props) => {
  const styles = useStyles(stylesheet);
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  input: {
    height: 38,
    width: '80%',
    borderWidth: 0,

    ...(Platform.OS === 'web' && {
      outlineStyle: 'none' as any,
    }),
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  },
}));
