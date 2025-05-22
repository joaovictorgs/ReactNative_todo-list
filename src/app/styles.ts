import { StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { AddTask } from '../components/addTask';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: '20%',
    width: '100%',
    backgroundColor: Colors.gray[700],
    justifyContent: 'center',
  },
  body: {
    paddingTop: 60,
    alignItems: 'center',
    height: '70%',
    width: '100%',
    backgroundColor: Colors.gray[600],
  },
  addTask: {
    zIndex: 10,
    height: '10%',
    width: '100%',
    backgroundColor: Colors.gray[700],
    justifyContent: 'center',
    paddingTop: 60,
  },
});
