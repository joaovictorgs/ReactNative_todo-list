import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 80,
  },
  rocketIcon: {
    color: Colors.blue[300],
  },
  toText: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 50,
    color: Colors.blue[300],
  },
  doText: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 50,
    color: Colors.blue[100],
  },
});
