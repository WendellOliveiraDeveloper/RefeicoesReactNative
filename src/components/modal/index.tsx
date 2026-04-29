import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../button";

type Props = {
  isVisible: boolean;
  titulo: string;
  isEscolha?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
  onClose: () => void;
  onNao?: () => void;
  onSim?: () => void;
};

const ModalComponent = ({
  isVisible,
  titulo,
  isEscolha = false,
  children,
  style,
  onClose,
  onNao,
  onSim,
  ...rest
}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            {titulo && <Text style={styles.title}>{titulo}</Text>}

            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={30} color={"#bb2222"} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>{children}</View>
          {isEscolha && (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonComponent
                title="Não"
                type="BUTTON"
                icon={<Ionicons name="logo-x" color={"#303030"} size={15} />}
                onPress={() => onNao?.()}
                style={{ flex: 1 }}
              />
              <ButtonComponent
                title="Sim"
                type="DELETE"
                icon={<Ionicons name="checkmark" color={"#bb2222"} size={15} />}
                onPress={() => onSim?.()}
                style={{ flex: 1 }}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
