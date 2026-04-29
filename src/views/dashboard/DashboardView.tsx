import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import CardComponent from "@/components/card";
import ButtonComponent from "@/components/button";
import { refeicoesStorage } from "@/storage/refeicaoStorage";

const DashboardView = ({ route, navigation }: any) => {
  const { refeicoes, porcentagem } = route.params;

  const [countDentro, setCountDentro] = useState<Number>(0);
  const [countFora, setCountFora] = useState<Number>(0);

  const isBoa = porcentagem >= 50;

  const corHeader = isBoa ? "#E5F0DB" : "#F4E6E7";
  const corTexto = isBoa ? "#2E7D32" : "#C62828";

  useEffect(() => {
    const loadCounts = async () => {
      const dentro = await refeicoesStorage.countAllByIsDentroDieta();
      const fora = await refeicoesStorage.countAllByIsForaDieta();

      setCountDentro(dentro as number);
      setCountFora(fora as number);
    };

    loadCounts();
  }, []);

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
    <View style={{ padding: 10 }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Estatísticas Gerais
        </Text>
      </View>

      <CardComponent
        title={refeicoes.length}
        mensagem="Refeições registradas"
      />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CardComponent
          title={countDentro}
          mensagem="refeições dentro da dieta"
          fundo="VERDE"
          style={{ flex: 1 }}
        />

        <CardComponent
          title={countFora}
          mensagem="refeições fora da dieta"
          fundo="VERMELHO"
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default DashboardView;
