import React, {
  useState,
  useEffect,
  useContext,
  ScreenWitdh,
  ScreenHeight,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Octicons } from "@expo/vector-icons";

export default function BusDetails() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/header.png")}
        style={styles.img}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 50,
            alignItems: "center",
            paddingBottom: 25,
          }}
        >
          <Octicons
            style={{ paddingLeft: 20 }}
            name="arrow-left"
            size={35}
            color="white"
            onPress={() => navigation.pop()}
          />
          <Text style={styles.title}>Chọn tuyết xe</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
});
