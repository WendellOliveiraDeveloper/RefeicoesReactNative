import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 2,
  },
  statsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  statRow: {
    marginBottom: 20,
  },
  statValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 5,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 15,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  gridValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
});
