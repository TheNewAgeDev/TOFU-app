import { StyleSheet, View, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/FontAwesome";

export default function Field({ label, icon, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <Ionicons
          name={icon}
          color="gray"
          size={22}
          style={{ marginLeft: 12, marginRight: 8 }}
        />
        <TextInput style={styles.textInput} secureTextEntry={secureTextEntry} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 8,
  },
  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderLeftWidth: 1,
    borderLeftColor: "gray",
    paddingLeft: 8,
    paddingVertical: 6,
  },
});
