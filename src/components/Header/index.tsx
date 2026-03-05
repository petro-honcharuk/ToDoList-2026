import React from 'react';

import { View, Text } from 'react-native';

import { createStyles, useStyles } from '@/src/theme/hooks/useStyles.hook';
import { useTheme } from '@/src/theme/hooks/useTheme.hook';

import { InputComponent } from '../InputComponent';

import { ButtonMenu } from './ButtonMenu';
import type { ButtonMenuProps } from './ButtonMenu';
import { ThemeSwitcher } from './ThemeSwitcher';

type Props = {
  onPress?: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
} & ButtonMenuProps;

export const HeaderComponent = ({
  onSearch,
  searchQuery,
  filter,
  setFilter,
}: Props) => {
  const { theme } = useTheme();

  const styles = useStyles(stylesheet);

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODOLIST</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <InputComponent
            placeholder={'Search note...'}
            value={searchQuery}
            onChangeText={onSearch}
            iconSize={30}
            iconName={'search'}
            iconColor={theme.colors.primary}
            withIcon={true}
          />
        </View>
        <ButtonMenu filter={filter} setFilter={setFilter} />
        <ThemeSwitcher />
      </View>
    </View>
  );
};

const stylesheet = createStyles((theme) => ({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    margin: 30,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    height: 38,
    borderRadius: 5,
    paddingHorizontal: 16,
  },
}));
