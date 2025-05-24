import { FlatList, Text, View, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../components/task";
import { Logo } from "../components/logo";
import { AddTask } from "../components/addTask";
import { TaskStateCounters } from "../components/taskStateCounters";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type TaskItem = {
  text: string;
  isDone: boolean;
};

export default function App() {
  const [taskDoneCounter, setTaskDoneCounter] = useState<number>();
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [inputText, setInputText] = useState<string>();

  function addNewTask() {
    if (inputText && !tasks.some((task) => task.text === inputText)) {
      setTasks([...tasks, { text: inputText, isDone: false }]);
      setInputText("");
    } else {
      Alert.alert(
        "Erro",
        "erro ao adicionar task, veja se a task já existe ou se o campo está preenchido corretamente",
        [{ text: "Ok" }]
      );
    }
  }
  function handleDelete(textToDelete: string) {
    Alert.alert("Excluir", "Deseja realmente excluir a task?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks(tasks.filter((task) => task.text !== textToDelete)),
      },
      { text: "Não" },
    ]);
  }

  function toggleTaskDone(text: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.text === text ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  useEffect(() => {
    var counter: number = 0;
    tasks.map((task) => (task.isDone ? counter++ : counter));
    setTaskDoneCounter(counter);
  }, [tasks]);

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
        <TaskStateCounters
          criadas={tasks.length}
          concluidas={taskDoneCounter != undefined ? taskDoneCounter : 0}
        ></TaskStateCounters>
        <FlatList
          style={styles.flatList}
          data={tasks}
          renderItem={({ item }) => (
            <Task
              deleteTask={() => handleDelete(item.text)}
              taskText={item.text}
              isDone={item.isDone}
              toggleDone={() => toggleTaskDone(item.text)}
            ></Task>
          )}
          keyExtractor={(item) => item.text}
          ListEmptyComponent={
            <View style={styles.emptyTasksBorder}>
              <MaterialIcons
                name="assignment"
                size={60}
                style={styles.assignmentIcon}
              ></MaterialIcons>
              <Text style={styles.emptyTaskFirstText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTaskSeccondText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        ></FlatList>
      </View>
    </View>
  );
}
