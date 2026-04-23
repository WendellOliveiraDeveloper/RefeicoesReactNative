import React from "react";
import { ButtonProps, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type typeButton = "SUBMIT" | "BUTTON" | "DELETE";

type Props = {
  title: string;
  type?: typeButton;
} & ButtonProps;

const backgroundColorStyles = {
  BUTTON: styles.buttonBackground,
  SUBMIT: styles.submitBackground,
  DELETE: styles.deleteBackground,
};

const textStyleMap = {
  BUTTON: styles.buttonText,
  SUBMIT: styles.submitText,
  DELETE: styles.deleteText,
};

const ButtonComponent = ({ title, type = "BUTTON", ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, backgroundColorStyles[type]]}
      {...rest}
    >
      <Text style={[textStyleMap[type]]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
