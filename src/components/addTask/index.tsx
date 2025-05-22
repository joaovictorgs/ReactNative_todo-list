import { View, TextInput, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { Colors } from '../../styles/colors';
import { useState } from 'react';

const buttonStates = {
  normal: styles.buttom,
  hovered: styles.buttomHovered,
};
export function AddTask() {
  const [state, SetState] = useState(buttonStates.normal);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={Colors.gray[300]}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={state}
        onPressIn={() => SetState(buttonStates.hovered)}
        onPressOut={() => SetState(buttonStates.normal)}
      >
        <View style={styles.addButtom}>
          <MaterialIcons name="add" size={20} style={styles.addIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
