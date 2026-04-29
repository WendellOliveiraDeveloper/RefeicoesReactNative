import ButtonComponent from "@/components/button";
import { Refeicao } from "@/interface/Refeicao";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { refeicoesStorage } from "@/storage/refeicaoStorage";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
  route: any;
};

const EdicaoView = ({ route, navigation }: Props) => {
  const { refeicao } = route.params;

  const corHeader = refeicao.isDentroDaDieta ? "#E5F0DB" : "#F4E6E7";
  const corTexto = refeicao.isDentroDaDieta ? "#2E7D32" : "#C62828";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: corHeader,
      },
      headerTintColor: corTexto,
      headerTitleAlign: "left",
    });
  }, [navigation, corHeader, corTexto]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={[styles.bold, { fontSize: 25 }]}>{refeicao.nome}</Text>
          <Text style={styles.text}>{refeicao.descricao}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, { fontSize: 18 }]}>Data e hora:</Text>
          <Text style={styles.text}>
            {refeicao.data} - {refeicao.hora}
          </Text>
        </View>
        <View style={styles.cardDieta}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: refeicao.isDentroDaDieta
                  ? "#2E7D32"
                  : "#C62828",
                borderRadius: 10,
              },
            ]}
          />
          <Text style={{ fontSize: 17 }}>
            {refeicao.isDentroDaDieta ? "Dentro da dieta" : "Fora da dieta"}
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <ButtonComponent
          title="Editar refeição"
          type="BUTTON"
          onPress={() =>
            navigation.navigate("Refeicao", { refeicao: refeicao })
          }
        />
        <ButtonComponent
          title="Excluir refeição"
          type="DELETE"
          onPress={async () => {
            await refeicoesStorage.remove(refeicao);
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }}
        />
      </View>
    </View>
  );
};

export default EdicaoView;
