import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';

export function Logo() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="rocket-launch" style={styles.rocketIcon} size={40} />
      <Text style={styles.toText}>to</Text>
      <Text style={styles.doText}>do</Text>
    </View>
  );
}
