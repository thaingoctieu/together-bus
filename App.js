import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation, FontAwesome5 } from "@expo/vector-icons";

import { Login, Home, Weather, Payment, User, PaymentMethod, FindBus, BusDetails, SuccessfulPayment } from "./screens/index";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ff5f5f",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cloud-sun" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="payment"
        component={Payment}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-check-alt" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* if logged in */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UserIn" component={MyTabs} />
      <Stack.Screen name="findbus" component={FindBus} />
      <Stack.Screen name="BusDetails" component={BusDetails} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="SuccessfulPayment" component={SuccessfulPayment} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
