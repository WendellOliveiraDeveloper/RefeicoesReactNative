import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import InputComponent from "@/components/input";
import ButtonComponent from "@/components/button";
import { refeicoesStorage } from "@/storage/refeicaoStorage";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CheckboxComponent from "@/components/checkbox";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Refeicao">;
  route: any;
};

const RefeicaoView = ({ route, navigation }: Props) => {
  const { refeicao } = route.params;

  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [isDentroDieta, setIsDentroDieta] = useState<boolean>(true);

  useEffect(() => {
    setNome(refeicao.nome);
    setDescricao(refeicao.descricao);
    setDate(refeicao.data);
    setHora(refeicao.hora);
    setIsDentroDieta(refeicao.isDentroDaDieta);
  }, [refeicao]);

  const submitForm = async () => {
    if (!nome || !date || !hora) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    const payload = {
      id: Date.now(),
      nome,
      descricao,
      data: date,
      hora,
      isDentroDaDieta: isDentroDieta,
    };

    await refeicoesStorage.add(payload);

    navigation.navigate("Resultado", { isDentroDieta });
  };

  const mudarTypeDieta = () => {
    setIsDentroDieta((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View>
        <InputComponent
          label="Nome"
          onChangeText={setNome}
          value={nome}
          required
        />
        <InputComponent
          label="Descrição"
          onChangeText={setDescricao}
          value={descricao}
          multiline
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 20,
          }}
        >
          <InputComponent
            label="Data"
            placeholder="dd/mm/yyyy"
            value={date}
            onChangeText={setDate}
            editable={true}
            style={{ flex: 1 }}
          />

          <InputComponent
            label="Hora"
            placeholder="hh:mm"
            value={hora}
            onChangeText={setHora}
            editable={true}
            style={{ flex: 1 }}
          />
        </View>
        <Text style={styles.label}>Está dentro da dieta?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 15,
            marginTop: 8,
          }}
        >
          <CheckboxComponent
            label="Sim"
            value={isDentroDieta}
            onChange={mudarTypeDieta}
            style={{ flex: 1 }}
          />
          <CheckboxComponent
            label="Não"
            fundo="VERMELHO"
            value={!isDentroDieta}
            onChange={mudarTypeDieta}
            style={{ flex: 1 }}
          />
        </View>
      </View>

      <View>
        <ButtonComponent
          title="Cadastrar Refeição"
          type="SUBMIT"
          onPress={() => {
            submitForm();
          }}
        />
      </View>
    </View>
  );
};

export default RefeicaoView;
