import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Colors.gray[500],
    width: '70%',
    height: 60,
    borderColor: Colors.gray[700],
    borderWidth: 1,
    borderRadius: 5,
    color: Colors.gray[100],
    paddingLeft: 10,
    marginRight: 10,
  },
  buttom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: 60,
    borderRadius: 5,
    backgroundColor: Colors.blue[400],
  },
  addIcon: {
    color: Colors.gray[100],
  },
  addButtom: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // azul de fundo (ou "transparent" se quiser só a borda)
  },

  buttomHovered: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: 60,
    borderRadius: 5,
    backgroundColor: Colors.blue[300],
  },
});
