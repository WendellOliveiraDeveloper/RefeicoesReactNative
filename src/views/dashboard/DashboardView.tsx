import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

const DashboardView = ({ route, navigation }: any) => {
  const { porcentagem } = route.params;

  const isBoa = porcentagem >= 50;

  const corHeader = isBoa ? "#E5F0DB" : "#F4E6E7";
  const corTexto = isBoa ? "#2E7D32" : "#C62828";
  const corFundoBotao = isBoa ? "#2E7D32" : "#C62828";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: corHeader,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: corTexto,
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Text style={[styles.headerTitle, { color: corTexto }]}>
            {porcentagem.toFixed(2)}%
          </Text>
          <Text style={[styles.headerSubtitle, { color: corTexto }]}>
            das refeições dentro da dieta
          </Text>
        </View>
      ),
      headerTitleAlign: "center",
    });
  }, [navigation, porcentagem, corHeader, corTexto]);

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default DashboardView;
