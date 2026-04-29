import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "@/components/button";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
  route: any;
};

const ResultadoView = ({ route, navigation }: Props) => {
  const { isDentroDieta } = route.params;

  const CORES = {
    color: isDentroDieta ? "#2E7D32" : "#C62828",
  };

  return (
    <View style={styles.container}>
      {isDentroDieta ? (
        <View style={{ alignItems: "center", gap: 10 }}>
          <Text style={[styles.fontBold, { fontSize: 25 }, CORES]}>
            Continue assim!
          </Text>
          <Text>
            Você está <Text style={styles.fontBold}>dentro da dieta!</Text>
          </Text>
          <Image
            source={require("@/assets/feliz.png")}
            style={{ width: 300, height: 300, marginTop: 20 }}
          />
        </View>
      ) : (
        <View style={{ alignItems: "center", gap: 10 }}>
          <Text style={[styles.fontBold, { fontSize: 25 }, CORES]}>
            Que pena!
          </Text>
          <Text>
            Você <Text style={styles.fontBold}>saiu da dieta</Text> dessa vez,
            mas continue se esforçando!
          </Text>
          <Image
            source={require("@/assets/triste.png")}
            style={{ width: 300, height: 300, marginTop: 20 }}
          />
        </View>
      )}
      <ButtonComponent
        title="Voltar para a página inicial"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        }
      />
    </View>
  );
};

export default ResultadoView;
