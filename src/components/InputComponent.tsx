import React from 'react';

import { TextInput, View, Platform } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { createStyles, useStyles } from '../theme/hooks/useStyles.hook';

type Props = {
  value: string | any;
  placeholder?: string;
  onChangeText: (text: string) => void;
  iconSize?: number;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  withIcon?: boolean;
};

export const InputComponent = ({
  value,
  placeholder,
  onChangeText,
  iconColor,
  iconName,
  iconSize,
  withIcon = false,
}: Props) => {
  const styles = useStyles(stylesheet);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {withIcon && (
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      )}
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    height: 38,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 5,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 38,
    borderWidth: 0,

    ...(Platform.OS === 'web' && {
      outlineStyle: 'none' as any,
    }),
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
}));
