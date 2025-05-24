import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contadorCreated: {
    color: Colors.blue[300],
  },
  contadorCreatedNumber: {
    marginLeft: 5,
    borderRadius: 7,
    textAlign: "center",
    width: 25,
    backgroundColor: Colors.gray[400],
    color: Colors.gray[100],
  },
  contadorDone: {
    color: Colors.blue[100],
  },
  contadorDoneNumber: {
    marginLeft: 5,
    borderRadius: 7,
    textAlign: "center",
    width: 25,
    backgroundColor: Colors.gray[400],
    color: Colors.gray[100],
  },
});
