import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 19,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  backgroundColorOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#303030",
  },

  buttonBackground: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#303030",
  },
  submitBackground: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#639399",
  },
  deleteBackground: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#EF4444",
  },

  buttonText: { color: "#303030" },
  submitText: { color: "#639399" },
  deleteText: { color: "#EF4444" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  dashboard: {
    backgroundColor: "#E5F0DB",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    position: "relative"
  },

  dashboardContent: {
    alignItems: "center"
  },

  porcentagem: {
    fontSize: 24,
    fontWeight: "bold"
  },

  arrow: {
    position: "absolute",
    top: 10,
    right: 10
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },

  botao: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold"
  },

  data: {
    fontWeight: "bold",
    marginBottom: 5
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8
  },

  hora: {
    marginRight: 10
  },

  nome: {
    flex: 1
  },

  bolinha: {
    width: 10,
    height: 10,
    borderRadius: 5
  }
});
