import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import ButtonComponent from "@/components/button";
import HeaderComponent from "@/components/header";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { useFocusEffect } from "expo-router";
import { refeicoesStorage } from "@/storage/refeicaoStorage";
import { Refeicao } from "@/interface/Refeicao";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeView = () => {
  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);

  const navigation = useNavigation<NavigationProps>();

  const totalRefeicoes = refeicoes.length;

  const dentro = refeicoes.reduce(
    (acc, refeicao) => acc + (refeicao.isDentroDaDieta === true ? 1 : 0),
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

  useFocusEffect(
    useCallback(() => {
      getRefeicoes();
    }, []),
  );

  const getRefeicoes = async () => {
    try {
      const refeicoes = await refeicoesStorage.getAll();
      setRefeicoes(refeicoes);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const refeicoesPorData = useMemo(() => {
    const grupos: Record<string, Refeicao[]> = {};

    refeicoes.forEach((r) => {
      if (!grupos[r.data]) grupos[r.data] = [];
      grupos[r.data].push(r);
    });

    return Object.entries(grupos)
      .map(([data, refeicoes]) => ({ data, refeicoes }))
      .sort((a, b) => (a.data < b.data ? 1 : -1));
  }, [refeicoes]);

  return (
    <View>
      <HeaderComponent />
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.dashboard}
          onPress={() => {
            if (totalRefeicoes > 0)
              navigation.navigate("Dashboard", { porcentagem });
          }}
        >
          <View style={styles.dashboardContent}>
            {totalRefeicoes > 0 ? (
              <>
                <Text style={styles.porcentagem}>
                  {porcentagem.toFixed(2)}%
                </Text>
                <Text>das refeições dentro da dieta</Text>
                <Feather name="arrow-up-right" size={20} style={styles.arrow} />
              </>
            ) : (
              <Text>Nenhuma refeição registrada</Text>
            )}
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Refeições</Text>
        <ButtonComponent
          title="Nova Refeição"
          onPress={() => navigation.navigate("Refeicao")}
          style={{ marginTop: 10 }}
        />

        <FlatList
          data={refeicoesPorData}
          keyExtractor={(item) => item.data}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.data}>{item.data}</Text>

                {item.refeicoes.map((ref) => (
                  <View key={ref.id} style={styles.card}>
                    <Text style={styles.hora}>{ref.hora}</Text>
                    <Text style={styles.nome}>{ref.nome}</Text>
                    <View
                      style={[
                        styles.bolinha,
                        {
                          backgroundColor: ref.isDentroDaDieta
                            ? "green"
                            : "red",
                        },
                      ]}
                    />
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeView;
