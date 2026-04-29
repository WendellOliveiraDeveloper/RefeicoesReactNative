import React from "react";
import { ButtonProps, TouchableOpacity, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

type typeButton = "SUBMIT" | "BUTTON" | "DELETE";

type Props = {
  title: string;
  type?: typeButton;
  style?: ViewStyle;
  icon?: React.ReactNode;
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

const ButtonComponent = ({
  title,
  type = "BUTTON",
  icon,
  style,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, backgroundColorStyles[type], style]}
      {...rest}
    >
      {icon}
      <Text style={[textStyleMap[type]]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
