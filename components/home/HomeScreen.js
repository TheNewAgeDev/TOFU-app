import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function StartView() {
  return <Text>Iniciar</Text>;
}
function ResumeView() {
  return <Text>Reanudar</Text>;
}
function DoneView() {
  return <Text>Finalizados</Text>;
}

export default function Login() {
  return (
    <Tab.Navigator
      initialRouteName="Start"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarActiveTintColor: "grey",
        tabBarInactiveTintColor: "white",
        tabBarIcon: () => null,
        tabBarLabelStyle: { fontSize: 18, margin: 18 }
      }}
    >
      <Tab.Screen
        name="Start"
        component={StartView}
        options={{ title: "Comenzar" }}
      />
      <Tab.Screen
        name="Resume"
        component={ResumeView}
        options={{ title: "Resumir" }}
      />
      <Tab.Screen
        name="Done"
        component={DoneView}
        options={{ title: "Finalizados" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#233671",
    height: 64,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
