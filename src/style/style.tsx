import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemsContainer: {
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: 5,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -18,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '95%', // Фіксована ширина
    height: '50%', // Фіксована висота
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Для Android
  },
  buttonContainerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '80%',
    borderWidth: 2,
    borderRadius: 8,
    margin: 5,
  },
});
