import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  criadas: number;
  concluidas: number | undefined;
};

export function TaskStateCounters({ criadas, concluidas }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.contadorCreated}>Criadas: </Text>
        <Text style={styles.contadorCreatedNumber}>{criadas}</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.contadorDone}>Concluídas: </Text>
        <Text style={styles.contadorDoneNumber}>{concluidas}</Text>
      </View>
    </View>
  );
}
