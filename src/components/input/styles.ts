import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1a1a1a',
    height: 48,
  },
  inputMultiline: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  required: {
    color: '#d05416',
  }
});