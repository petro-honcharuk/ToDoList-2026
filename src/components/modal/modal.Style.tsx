import { StyleSheet } from 'react-native';

import { Colors } from '@/src/theme/colors';

import { fonts } from '../../theme/font';

export const createStyles = (colors: Colors) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    POPUP: {
      textAlign: 'center',
      alignItems: 'center',
      width: '35%',
      height: '40%',
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.borderColor,
      marginBottom: '13%',
    },
    text: {
      fontSize: 24,
      fontFamily: fonts.bold,
      marginTop: 18,
      marginLeft: 20,
      marginBottom: 25,
      color: colors.text,
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

    buttonContainerModal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: '35%',
      marginBottom: 18,
    },
    buttonCancelContent: {
      width: 110,
      height: 38,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 1,
      borderEndEndRadius: 5,
      borderColor: colors.borderColorButton,
      backgroundColor: colors.background,
    },
    buttonCancelTitle: {
      fontSize: 18,
      color: colors.buttonText,
      fontFamily: fonts.regular,
    },
    buttonApllyContent: {
      width: 110,
      height: 38,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 1,
      borderEndEndRadius: 5,
      borderColor: '#6C63FF',
      backgroundColor: '#6C63FF',
    },
    buttonApllyTitle: {
      fontSize: 18,
      color: '#F7F7F7',
      fontFamily: fonts.regular,
    },
  });
