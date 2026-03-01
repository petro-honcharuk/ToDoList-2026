import { useMemo } from 'react';

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../types';

import { useTheme } from './useTheme.hook';

type StyleObject = Record<string, ViewStyle | TextStyle | ImageStyle>;

export const createStyles = <T extends StyleObject>(
  fn: (theme: Theme) => T
) => {
  return fn;
};

export const useStyles = <T extends StyleObject>(
  styleCreator: (theme: Theme) => T
) => {
  const { theme } = useTheme();

  return useMemo(
    () => StyleSheet.create(styleCreator(theme)) as T,
    [theme, styleCreator]
  );
};
