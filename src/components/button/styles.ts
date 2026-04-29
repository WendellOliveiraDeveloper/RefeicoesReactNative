import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
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
});
