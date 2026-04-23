import React, { useLayoutEffect } from "react";
import ButtonComponent from "@/components/button";
import HeaderComponent from "@/components/header";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

type Refeicao = {
  hora: string;
  nome: string;
  status: "dentro" | "fora";
};

type Dia = {
  data: string;
  refeicoes: Refeicao[];
};

// DADOS
const dados: Dia[] = [
  {
    data: "12.08.22",
    refeicoes: [
      { hora: "20:00", nome: "X-tudo", status: "fora" },
      { hora: "18:30", nome: "Pizza", status: "fora" },
      { hora: "16:00", nome: "Whey protein com leite", status: "dentro" },
      { hora: "14:00", nome: "Arroz, feijão e frango", status: "dentro" },
      { hora: "12:30", nome: "Salada cesar com frango", status: "dentro" },
      { hora: "10:00", nome: "Pão com ovo", status: "dentro" },
      { hora: "09:30", nome: "Vitamina de banana", status: "dentro" },
      { hora: "08:00", nome: "Café preto", status: "dentro" },
    ],
  },
  {
    data: "11.08.22",
    refeicoes: [
      { hora: "21:00", nome: "Hambúrguer", status: "fora" },
      { hora: "19:00", nome: "Macarrão", status: "dentro" },
      { hora: "17:00", nome: "Iogurte", status: "dentro" },
      { hora: "15:00", nome: "Maçã", status: "dentro" },
      { hora: "13:00", nome: "Almoço completo", status: "dentro" },
    ],
  },
  {
    data: "10.08.22",
    refeicoes: [
      { hora: "20:00", nome: "Pizza", status: "fora" },
      { hora: "18:00", nome: "Batata frita", status: "fora" },
      { hora: "16:00", nome: "Barra de proteína", status: "dentro" },
      { hora: "12:00", nome: "Arroz e carne", status: "dentro" },
      { hora: "09:00", nome: "Pão integral", status: "dentro" },
    ],
  },
  {
    data: "09.08.22",
    refeicoes: [
      { hora: "20:30", nome: "Lanche", status: "fora" },
      { hora: "18:00", nome: "Frango grelhado", status: "dentro" },
      { hora: "15:30", nome: "Banana", status: "dentro" },
      { hora: "12:00", nome: "Almoço leve", status: "dentro" },
      { hora: "08:30", nome: "Café da manhã", status: "dentro" },
    ],
  },
];

const HomeView = () => {
  const navigation = useNavigation<NavigationProps>();

  const totalRefeicoes = dados.reduce(
    (acc, dia) => acc + dia.refeicoes.length,
    0,
  );

  const dentro = dados.reduce(
    (acc, dia) =>
      acc + dia.refeicoes.filter((r) => r.status === "dentro").length,
    0,
  );

  const porcentagem = (dentro / totalRefeicoes) * 100;

  const isBoa = porcentagem >= 50;

  const corHeader = isBoa ? "#E5F0DB" : "#F4E6E7";
  const corTexto = isBoa ? "#2E7D32" : "#C62828";

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View>
      <HeaderComponent />
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.dashboard}
          onPress={() => navigation.navigate("Dashboard", { porcentagem })}
        >
          <View style={styles.dashboardContent}>
            <Text style={styles.porcentagem}>{porcentagem.toFixed(2)}%</Text>
            <Text>das refeições dentro da dieta</Text>
          </View>
          <Feather name="arrow-up-right" size={20} style={styles.arrow} />
        </TouchableOpacity>

        <Text style={styles.text}>Refeições</Text>
        <ButtonComponent
          title="Nova Refeição"
          onPress={() => navigation.navigate("Refeicao")}
        />

        <FlatList<Dia>
          data={dados}
          keyExtractor={(_: Dia, index: number) => index.toString()}
          renderItem={({ item }: { item: Dia }) => (
            <View>
              <Text style={styles.data}>{item.data}</Text>
              {item.refeicoes.map((ref: Refeicao, i: number) => (
                <View key={i} style={styles.card}>
                  <Text style={styles.hora}>{ref.hora}</Text>
                  <Text style={styles.nome}>{ref.nome}</Text>
                  <View
                    style={[
                      styles.bolinha,
                      {
                        backgroundColor:
                          ref.status === "dentro" ? "green" : "red",
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeView;
