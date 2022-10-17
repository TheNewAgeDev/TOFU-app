import { View, Image, StyleSheet } from "react-native";

import Logo from "../../assets/unipaz.jpg";
import Submit from "./Submit";
import Field from "./Field";

export default function Login() {
  return (
    <>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.loginBox}>
        <Field icon={"user"} label={"Correo electrónico"} />
        <Field icon={"lock"} label={"Contraseña"} secureTextEntry={true} />
      </View>
      <Submit />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 256,
    height: 256,
  },
  loginBox: {
    backgroundColor: "#233671",
    borderRadius: 8,
    padding: 16,
    marginVertical: 24,
    width: 280,
  },
});
