import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    backgroundColor: Colors.gray[500],
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBlockColor: Colors.gray[400],
    borderRadius: 5,
  },
  checkIcon: {
    padding: 10,
    color: Colors.blue[300],
  },
  checkIconHover: {
    padding: 10,
    color: Colors.blue[400],
  },
  doneCheckIcon: {
    color: Colors.gray[100],
  },
  doneCheckIconBox: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: Colors.blue[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneCheckIconBoxHovered: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: Colors.blue[100],
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteIcon: {
    padding: 10,
    color: Colors.gray[300],
  },
  deleteIconHover: {
    padding: 10,
    color: Colors.red[100],
  },
  textContent: {
    padding: 10,
    color: Colors.gray[100],
  },
  textContentDone: {
    textDecorationLine: 'line-through',
    padding: 10,
    color: Colors.gray[300],
  },
});
