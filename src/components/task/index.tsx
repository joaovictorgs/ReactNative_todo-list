import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { use, useState } from 'react';

type Props = {
  taskText: string;
};

export function Task({ taskText }: Props) {
  const [isDone, setIsDone] = useState(false);
  const [addHovered, setAddHovered] = useState(false);
  const [trashHovered, setTrashHovered] = useState(false);

  return (
    <View style={styles.container}>
      {isDone ? (
        <TouchableOpacity
          onPress={() => setIsDone(!isDone)}
          onPressIn={() => setAddHovered(true)}
          onPressOut={() => setAddHovered(false)}
          style={addHovered ? styles.doneCheckIconBoxHovered : styles.doneCheckIconBox}
          activeOpacity={1}
        >
          <MaterialIcons name="check" style={styles.doneCheckIcon} size={15} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setIsDone(!isDone)}
          onPressIn={() => setAddHovered(true)}
          onPressOut={() => setAddHovered(false)}
          activeOpacity={1}
        >
          <MaterialIcons
            name="radio-button-unchecked"
            style={addHovered ? styles.checkIconHover : styles.checkIcon}
            size={20}
          />
        </TouchableOpacity>
      )}
      {<Text style={isDone ? styles.textContentDone : styles.textContent}> {taskText}</Text>}
      <TouchableOpacity
        onPress={() => console.log('apagar')}
        onPressIn={() => setTrashHovered(true)}
        onPressOut={() => setTrashHovered(false)}
        activeOpacity={1}
      >
        {
          <MaterialIcons
            name="delete"
            style={trashHovered ? styles.deleteIconHover : styles.deleteIcon}
            size={20}
          />
        }
      </TouchableOpacity>
    </View>
  );
}
