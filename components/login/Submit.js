import { StyleSheet, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Submit() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.label}> Iniciar sesión</Text>
      <FontAwesome
        name="arrow-right"
        size={18}
        color={"white"}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#098d3c",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 22,
    flexDirection: "row",
  },
  label: {
    color: "white",
    fontSize: 18,
    marginRight: 4,
  },
  icon: {
    alignSelf: "center",
  },
});
