import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import InputComponent from "@/components/input";
import ButtonComponent from "@/components/button";

const RefeicaoView = () => {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

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
            editable={true}
            style={{ flex: 1 }}
          />

          <InputComponent
            label="Hora"
            placeholder="hh:mm"
            editable={true}
            style={{ flex: 1 }}
          />
        </View>
        <Text style={styles.label}>Está dentro da dieta?</Text>
      </View>

      <View>
        <ButtonComponent title="Cadastrar Refeição" type="SUBMIT" />
      </View>
    </View>
  );
};

export default RefeicaoView;
