import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styles } from "./styles";

interface LabeledInputProps extends TextInputProps {
  label: string;
  multiline?: boolean;
  required?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const InputComponent = ({
  label,
  multiline = false,
  required = false,
  style,
  inputStyle,
  ...rest
}: LabeledInputProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}{required && <Text style={styles.required}>*</Text>}</Text>
      <TextInput
        multiline={multiline}
        placeholder=""
        style={[styles.input, multiline && styles.inputMultiline, inputStyle]}
        {...rest}
      />
    </View>
  );
};

export default InputComponent;
