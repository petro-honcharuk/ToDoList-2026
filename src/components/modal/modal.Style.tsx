import { StyleSheet } from 'react-native';

import { fonts } from '../../theme/font';

export const addModalStyle = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  POPUP: {
    textAlign: 'center',
    alignItems: 'center',
    width: '35%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: '13%',
  },
  text: {
    fontSize: 24,
    fontFamily: fonts.bold,
    marginTop: 18,
    marginLeft: 20,
    marginBottom: 25,
  },
  input: {
    height: 38,
    width: '80%',
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 5,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: fonts.regular,
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
    borderColor: '#6C63FF',
    backgroundColor: '#FFFFFF',
  },
  buttonCancelTitle: {
    fontSize: 18,
    color: '#6C63FF',
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
    color: '#FFFFFF',
    fontFamily: fonts.regular,
  },
});
