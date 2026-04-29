import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type fundo = "VERDE" | "VERMELHO";

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  fundo?: fundo;
  label: string;
  style?: ViewStyle;
};

const fundoStyles = {
  VERDE: {
    active: { backgroundColor: "#E1F5EE", borderColor: "#1D9E75" },
    dot: { backgroundColor: "#1D9E75" },
    label: { color: "#0F6E56" },
  },
  VERMELHO: {
    active: { backgroundColor: "#FAECE7", borderColor: "#993C1D" },
    dot: { backgroundColor: "#D85A30" },
    label: { color: "#993C1D" },
  },
};

const CheckboxComponent = ({
  value,
  onChange,
  label,
  fundo = "VERDE",
  style,
}: Props) => {
  const currentStyle = fundoStyles[fundo];

  return (
    <View style={[styles.row, style]}>
      <TouchableOpacity
        style={[styles.btn, value && currentStyle.active]}
        onPress={() => onChange(!value)}
        accessibilityRole="radio"
        accessibilityState={{ checked: value }}
      >
        <View style={[styles.dot, value && currentStyle.dot]} />
        <Text style={[styles.label, value && currentStyle.label]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckboxComponent;
