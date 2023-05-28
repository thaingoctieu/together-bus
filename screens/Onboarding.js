import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  ScreenWidth,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  const animation = useRef(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.blue}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: "110%",
            marginLeft: 8,
          }}
          source={require("../assets/bus-pop.json")}
        />
        <Text style={styles.title}>Together Bus</Text>
        <Text style={styles.slogan}>The bus takes you every where</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.btn}
        >
          <FontAwesome name="angle-double-right" size={45} color="#214083" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF897E",
  },
  blue: {
    flex: 5,
    backgroundColor: "#214083",
    borderTopLeftRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: "#fff",
    // paddingVertical: 20,
  },
  slogan: {
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
    paddingVertical: 30,
  },
  btn: {
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5F5F",
    margin: 130,
  },
});
