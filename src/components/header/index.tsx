import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AvatarIcon from "@/components/avatar-icon";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10 }}
      >
        <FontAwesome name="cutlery" size={35} color="black" />

        <View>
          <Text style={styles.title}>Daily</Text>
          <Text style={styles.title}>Diet</Text>
        </View>
      </View>
      <View style={{ paddingRight: 10 }}>
        <TouchableOpacity activeOpacity={0.3}>
          <AvatarIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
