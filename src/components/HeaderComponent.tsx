import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';

import { Colors } from '../theme/colors';
import { fonts } from '../theme/font';
import { useTheme } from '../theme/ThemeContext';

import { ButtonMenu } from './ButtonMenu';
import { ButtonThemeComponent } from './ButtonThemeComponent';

type Props = {
  onPress?: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
};

export const HeaderComponent = ({ onSearch, searchQuery }: Props) => {
  const { colors } = useTheme();

  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search note..."
        value={searchQuery}
        onChangeText={onSearch}
      ></TextInput>
      <ButtonMenu />
      <ButtonThemeComponent />
    </View>
  );
};

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 16,
      backgroundColor: colors.background,
    },
    input: {
      height: 38,
      width: '80%',
      borderWidth: 1,
      borderColor: colors.borderColor,
      borderRadius: 5,
      paddingTop: 8,
      paddingRight: 16,
      paddingLeft: 16,
      paddingBottom: 8,
      fontSize: 16,
      fontFamily: fonts.regular,
      color: colors.text,
    },
    themeImage: {
      height: 38,
      width: 38,
    },
  });
