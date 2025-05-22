import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../components/task';
import { Logo } from '../components/logo';
import { AddTask } from '../components/addTask';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState<string>();
  const [taskText, setTaskText] = useState<string[]>([]);

  function addNewTask() {
    if (inputText && !taskText.includes(inputText)) {
      setTaskText([...taskText, inputText]);
      setInputText('');
    }
  }
  function deleteActualTask(deletetask: string) {
    console.log('a');
    if (deletetask) {
      setTaskText(taskText.filter((text) => text != deletetask));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo></Logo>
      </View>
      <View style={styles.addTask}>
        <AddTask
          setTaskText={setInputText}
          taskText={inputText}
          addTask={() => addNewTask()}
        ></AddTask>
      </View>
      <View style={styles.body}>
        <FlatList
          style={styles.flatList}
          data={taskText}
          renderItem={({ item }) => (
            <Task deleteTask={() => deleteActualTask(item)} taskText={item}></Task>
          )}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}
