import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Search } from "../components";
import { Feather } from "@expo/vector-icons";

const TempT = () => {
  return (
    <View style={styles.temp_t}>
      <Text style={{ fontSize: 24 }}>Hiện tại</Text>
      <Feather name="sun" size={35} color="black" />
      <Text style={{ fontSize: 24 }}>33 °C</Text>
    </View>
  );
};

function Weather() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#011A51",
            marginBottom: 50,
          }}
        >
          Thời tiết
        </Text>
        {/* <Search /> */}
        <Text style={{ fontSize: 18, fontWeight: 500, color: "#011A51" }}>
          Thành phố Thủ Đức
        </Text>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={{ fontSize: 35, fontWeight: 500, color: "#C33439" }}>
            35
          </Text>
          <Text style={{ fontSize: 35 }}>°C</Text>
        </View>
        <Text style={{ paddingVertical: 5 }}>Nắng nóng kéo dài</Text>
        <Text>Độ ẩm: 55%</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TempT />
        <TempT />
        <TempT />
      </View>
    </View>
  );
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  temp_t: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 250,
    backgroundColor: "#F8CB2E",
    borderRadius: 10,
    width: "25%",
    paddingVertical: 50,
    margin: 15,
  },
});
