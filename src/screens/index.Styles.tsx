import { StyleSheet } from 'react-native';

import { Colors } from '../theme/colors';
import { fonts } from '../theme/font';

export const createStyles = (colors: Colors) =>
  StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    container: {
      width: '50%',
      height: '100%',
      backgroundColor: colors.background,
    },
    head: {
      height: '20%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
    },

    header: {
      width: '100%',
    },
    BODY: {
      flex: 1,
    },
    LIST: {
      flex: 1,
      width: '70%',
      paddingBottom: 100,
      marginTop: '4%',
      marginLeft: '15%',
    },
    addButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
    NOTE: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginVertical: 5,
      borderBottomWidth: 1,
      borderColor: colors.borderColor,
    },
    noteText: {
      flex: 1,
      fontSize: 20,
      fontFamily: fonts.regular,
      padding: 20,
      color: colors.text,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      margin: 8,
      padding: 5,
    },
  });
