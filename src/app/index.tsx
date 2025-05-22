import { Text, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../components/task';
import { Logo } from '../components/logo';
import { AddTask } from '../components/addTask';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo></Logo>
      </View>
      <View style={styles.addTask}>
        <AddTask></AddTask>
      </View>
      <View style={styles.body}>
        <Task taskText="TESTE"></Task>
      </View>
    </View>
  );
}
