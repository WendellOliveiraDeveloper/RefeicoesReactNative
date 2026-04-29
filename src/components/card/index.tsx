import React, { Children } from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type BackgroundColor = "VERDE" | "VERMELHO" | "CINZA";

type Props = {
  title: any;
  mensagem: string;
  fundo?: BackgroundColor;
  style?: ViewStyle;
};

const backgroundColorStyles = {
  CINZA: styles.backgroundCinza,
  VERDE: styles.backgroundVerde,
  VERMELHO: styles.backgroundVermelho,
};

const CardComponent = ({ title, mensagem, fundo = "CINZA", style }: Props) => {
  return (
    <View style={[styles.container, backgroundColorStyles[fundo], style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{mensagem}</Text>
    </View>
  );
};

export default CardComponent;
